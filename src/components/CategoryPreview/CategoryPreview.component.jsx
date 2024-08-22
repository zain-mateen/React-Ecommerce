import { Link } from 'react-router-dom';

import ProductCard from '../ProductSection/product-card.component';

import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className='category_preview_container'>
    <h2>
      <Link className='title heading-h2-bold' to={title}>{title.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;