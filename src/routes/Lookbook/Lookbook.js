import React from 'react';
import { LookbookData } from '../../Data';
import CollectionCart from '../../components/CollectionSection/CollectionCart.component';

import './Lookbook.scss';

const Lookbook = () => {
    return (
        <div className='lookbook'>
            <div className="container">
                <h2 className="heading heading-h2-bold">Lookbook</h2>
                <div className="lookbook_inr">
                    {LookbookData.map((item) => (
                        <CollectionCart 
                            key={item.id}
                            boxClass={item.boxClass}
                            image={item.image}
                            text={item.text}
                            heading={item.heading}
                            headingInner={item.headingInner}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lookbook;
