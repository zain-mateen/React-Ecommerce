import React from 'react';
import './InstagramSection.styles.scss';

import { InstagramSectionData } from '../../Data';
import ServiceSection from '../ServiceSection/ServiceSection.component';

const InstagramSection = () => {
    return (
        <div className='InstagramSection'>
            <div className="container">
                <div className="wrapper">
                    <h2 className='heading heading-h2-medium'>@UOMO</h2>
                </div>
                <div className="insta_post_main">
                    {InstagramSectionData.map((item) => (
                        <div className="insta_post_otr" key={item.id}>
                            <a href='/' className="insta_post_inr">
                                <img className='insta_post' src={item.image} alt="img" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <ServiceSection />
        </div>
    );
}

export default InstagramSection;
