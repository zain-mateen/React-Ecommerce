import { initializeApp } from "firebase/app";
import { 
  getAuth,  
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch, 
  query, 
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQ_x1VayS33wojqs7wnmNc0bIvOXU7V5c",
  authDomain: "uomo-83ed8.firebaseapp.com",
  projectId: "uomo-83ed8",
  storageBucket: "uomo-83ed8.appspot.com",
  messagingSenderId: "913950432461",
  appId: "1:913950432461:web:980eb2ae4dd1c088805d84",
  measurementId: "G-X5K1N3MN5Z"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// Email and Password Authentication
export const signInWithEmailAndPasswordAuth = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const createUserWithEmailAndPasswordAuth = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign Out
export const signOutUser = async () => await signOut(auth);

// Auth State Listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

// Create User Document in Firestore
export const createUserDocumentFromAuth = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

// Additional Firestore utilities if needed
export const getCollectionDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const writeBatchData = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  objectsToAdd.forEach(object => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, object);
  });

  await batch.commit();
};
