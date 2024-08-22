import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import './fonts/fonts.css';

import { CategoriesProvider } from './context/CategoriesContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
