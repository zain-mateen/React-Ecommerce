import { createContext, useState } from "react";
import { CollectionSectionData, ProductCartData, LimitedEditionData } from "../Data";

export const ProductsContext = createContext({
    collection: [],
    productCart: [],
    limitedEdition: [],
    cart: [],
    addToCart: () => {},
});

export const ProductsProvider = ({ children }) => {
    const [collection] = useState(CollectionSectionData);
    const [productCart] = useState(ProductCartData);
    const [limitedEdition] = useState(LimitedEditionData);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const value = { collection, productCart, limitedEdition, cart, addToCart };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
