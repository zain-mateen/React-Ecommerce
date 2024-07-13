import React from 'react';
import './CollectionSection.scss';
import { CollectionSectionData } from '../../Data';
import CollectionCart from './CollectionCart';

const CollectionSection = () => {
    return (
        <div className='CollectionSection' id='CollectionSection'>
            <div className="container">
                <div className="CollectionSection_inr">
                    {CollectionSectionData.map((item) => (
                        <CollectionCart 
                            key={item.id}
                            boxClass={item.boxClass}
                            image={item.image}
                            text={item.text}
                            headingInner={item.headingInner}
                            heading={item.heading}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CollectionSection;
