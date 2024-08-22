import React from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection.component';
import CompanyPartnerSection from '../../components/CompanyPartnerSection/CompanyPartnerSection.component';

import './About.scss';

import aboutHeroImage from '../../img/about-hero-img.webp';
import aboutImage from '../../img/about-img.webp';

const About = () => {
    return (
        <div className="about_hero_section">
            <div className="container">
                <div className="row wrapper_otr">
                    <div className="col-lg-8 col-md-8 wrapper_inr">
                        <h2 className="heading heading-h2-bold">About UOMO</h2>
                    </div>
                </div>
                <div className="img_otr">
                    <img className='img' src={aboutHeroImage} alt="About Uomo img" />
                </div>
                <div className="row row_custom">
                    <div className="col-lg-8 col-md-8 col_main_content_otr">
                        <div className="col_main_content_inr">
                            <h3 className="heading heading-h3-medium">our story</h3>
                            <p className="desc_bold heading-sm">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="desc heading-xs">
                                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
                            </p>
                            <div className="row mission_vision_main">
                                <div className="col-lg-6 col-md-6 mission_otr pad_left_0">
                                    <div className="mission_inr">
                                        <h6 className="heading heading-mm">Our Mission</h6>
                                        <p className="desc heading-xs">
                                            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mission_otr pad_right_0">
                                    <div className="mission_inr">
                                        <h6 className="heading heading-mm">Our Vision</h6>
                                        <p className="desc heading-xs">
                                            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row row_custom2">
                                <div className="col-lg-6 col_img_otr">
                                    <div className="col_img_inr">
                                        <img className='img' src={aboutImage} alt="About img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col_content_otr">
                                    <div className="col_content_inr">
                                        <h6 className="heading heading-mm">The Company</h6>
                                        <p className="desc heading-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSection />
                        <CompanyPartnerSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
