import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/ProductSection/product-card.component';

import './Category.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category_heading heading-h2-bold'>{category}</h2>
            <div className='categpry_container'>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        )
                    )
                }
            </div>
        </>
    )
}

export default Category;