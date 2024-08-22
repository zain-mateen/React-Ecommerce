import React from 'react';
import './LimitedItemSection.styles.scss';
import { BannerSectionData } from '../../Data';
import CollectionCart from '../CollectionSection/CollectionCart.component';
import CountdownTimer from '../CountdownTimer/CountdownTimer.component';
import { Link } from 'react-router-dom';

const LimitedItemSection = () => {
    return (
        <>
            <section className="LimitedItem">
                <div className="container_fluid2">
                    <div className="limitedItem_inr">
                        <div className="wrapper">
                            <h6 className="title heading-xs">Deal of the Week</h6>
                            <h1 className="heading heading-h1-regular"><span className='heading_inr heading-h1-bold'>Spring</span> Collection</h1>
                            <div className="action_otr">
                                <Link className='primary_underline_btn discover_btn' to='/shop'>Shop Now</Link>
                            </div>
                        </div>
                        <div className="countdown_timer_main">
                            <CountdownTimer targetDate="2024-12-31T00:00:00" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner_main">
                <div className="container">
                    <div className="row row_custom">
                        {BannerSectionData.map((item) => (
                            <div className="col-lg-6 col-md-6 col_box_otr" key={item.id}>
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
