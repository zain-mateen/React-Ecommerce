import { createContext, useState, useEffect } from "react";
import { CollectionSectionData, ProductCartData, LimitedEditionData } from "../Data";  // Make sure to import SHOP_DATA

import { getCategoriesAndDocuments } from "../utils/Firebase/Firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    addToCart: () => {},
    collection: [],
    productCart: [],
    limitedEdition: [],
    cart: [],
    shopData: [],
});

export const CategoriesProvider = ({ children }) => {
    const [collection] = useState(CollectionSectionData);
    const [productCart] = useState(ProductCartData);
    const [limitedEdition] = useState(LimitedEditionData);
    const [cart, setCart] = useState([]);
    const [categoriesMap, setCategoriesMap] = useState({});

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    useEffect(() => {
        const getCategoriesMap = async () => {
          const categoryMap = await getCategoriesAndDocuments('categories');
          setCategoriesMap(categoryMap);
        };
    
        getCategoriesMap();
    }, []);

    const value = { collection, productCart, limitedEdition, cart, categoriesMap, addToCart };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
