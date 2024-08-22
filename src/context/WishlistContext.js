import { createContext, useEffect, useState } from "react";

const addWishlistItem = (wishlistItems, productToAdd) => {
    const existingWishlistItem = wishlistItems.find(
        (wishlistItem) => wishlistItem.id === productToAdd.id
    );

    if (existingWishlistItem) {
        return wishlistItems.map((wishlistItem) => 
            wishlistItem.id === productToAdd.id
            ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
            : wishlistItem
        );
    };

    return [...wishlistItems, { ...productToAdd, quantity: 1 }];
};

const clearWishlistItem = (wishlistItems, wishlistToClear) => 
    wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistToClear.id);

export const WishlistContext = createContext({
    addItemToWishlist: () => {},
    clearItemFromWishlist: () => {},
    wishlistItems: [],
    wishlistCount: 0,
});

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        const newWishlistCount = wishlistItems.reduce(
            (total, wishlistItem) => total + wishlistItem.quantity, 0
        );
        setWishlistCount(newWishlistCount)

    }, [wishlistItems]);

    const addItemToWishlist = (productToAdd) => {
        setWishlistItems(addWishlistItem(wishlistItems, productToAdd))
    };

    const clearItemFromWishlist = (wishlistToClear) => {
        setWishlistItems(clearWishlistItem(wishlistItems, wishlistToClear))
    }

    const value = { wishlistItems, wishlistCount, addItemToWishlist, clearItemFromWishlist };

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
