import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

import './Shop.scss';

const Shop = () => {

    return (
        <div className='Shop'>
            <div className="container">
                <div className="shop_inr">
                    <Routes>
                        <Route index element={<CategoriesPreview />} />
                        <Route path=':category' element={<Category />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Shop;