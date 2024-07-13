import React from 'react';
import './LimitedItemSection.scss';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { BannerSectionData } from '../../Data';
import CollectionCart from '../CollectionSection/CollectionCart';

const LimitedItemSection = () => {
    return (
        <>
            <section class="LimitedItem">
                <div class="deal-timer-wrapper container position-relative">
                    <div class="deal-timer__content pb-2 mb-3 pb-xl-5 mb-xl-3 mb-xxl-5">
                        <p class="text_dash text-uppercase text-red fw-medium">Deal of the week</p>
                        <h3 class="h1 text-uppercase">
                            <strong>Spring </strong>
                            Collection</h3>
                        <a class="primary_underline_btn" href="/">Shop Now</a>
                    </div>
                </div>
            </section>
            <section className="banner_main">
                <div className="container">
                    <div className="row row_custom">
                        {BannerSectionData.map((item) => (
                            <div className="col-lg-6 col_box_otr" key={item.id}>
                                <CollectionCart 
                                    key={item.id}
                                    boxClass={item.boxClass}
                                    image={item.image}
                                    text={item.text}
                                    headingInner={item.headingInner}
                                    heading={item.heading}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default LimitedItemSection;
