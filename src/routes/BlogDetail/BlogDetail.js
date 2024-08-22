import React from 'react';

import './BlogDetail.scss';

import Image from '../../img/blog-1.webp';
import ContentImage1 from '../../img/blog-single-img1.webp';
import ContentImage2 from '../../img/blog-single-img2.webp';
import { BlogDetailReviewData } from '../../Data';
import Button from '../../components/Button/Button.component';
import ThemeInput from '../../components/ThemeInput/ThemeInput.component';

const BlogDetail = () => {
    return (
        <div className='BlogDetail'>
            <div className="container">
                <div className="row wrapper_otr">
                    <div className="col-lg-8 wrapper_inr">
                        <h2 className="heading heading-h2-bold">Woman with good shoes is never be ugly place</h2>
                        <div className="text_otr">
                            <p className="text heading-xsm">By Admin</p>
                            <p className="text heading-xsm">April 05, 2023</p>
                            <p className="text heading-xsm">Trends</p>
                        </div>
                    </div>
                </div>
                <div className="img_otr">
                    <img className='img' src={Image} alt="About Uomo img" />
                </div>
                <div className="row row_custom">
                    <div className="col-lg-8 col_main_content_otr">
                        <div className="col_main_content_inr">
                            <p className="desc_bold heading-xsm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
                            </p>
                            <h3 className="heading mt_20 mb_20 heading-mm">Sed do eiusmod tempor incididunt ut labore</h3>
                            <p className="desc mb_20 heading-xs">
                                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
                            </p>
                            <div className="row row_custom_2">
                                <div className="col-lg-6 col-md-6 custon_column_otr">
                                    <div className="custon_column_inr">
                                        <h6 className="heading heading-mm">Why choose product?</h6>
                                        <ul className="list_ul">
                                            <li className="list_li ls_disk heading-xs">Creat by cotton fibric with soft and smooth</li>
                                            <li className="list_li ls_disk heading-xs">Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                            <li className="list_li ls_disk heading-xs">Downloadable/Digital Products, Virtual Products</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 custon_column_otr">
                                    <div className="custon_column_inr">
                                        <h6 className="heading heading-mm">Sample Number List</h6>
                                        <ul className="list_ul">
                                            <li className="list_li ls_auto heading-xs">Create Store-specific attrittbutes on the fly</li>
                                            <li className="list_li ls_auto heading-xs">Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                            <li className="list_li ls_auto heading-xs">Downloadable/Digital Products, Virtual Products</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="desc mt_20 mb_20 heading-xs">
                                She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.
                            </p>
                            <div className="img_main">
                                <img className='img' src={ContentImage1} alt="" />
                                <img className='img' src={ContentImage2} alt="" />
                            </div>
                            <p className="desc mt_20 mb_20 heading-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
                            </p>
                            <p className="desc heading-xs">
                                She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.
                            </p>
                            <ul className="share_ul">
                                <li className="share_li">
                                    <a href="/" className='share_button facebook_btn'>
                                        <i className="icon ri-facebook-fill"></i>
                                        <p className='text heading-s'>Share on Facebook</p>
                                    </a>
                                </li>
                                <li className="share_li">
                                    <a href="/" className='share_button twitter_btn'>
                                        <i className="icon ri-twitter-fill"></i>
                                        <p className='text heading-s'>Share on Twitter</p>
                                    </a>
                                </li>
                                <li className="share_li">
                                    <a href="/" className='share_button pinterest_btn'>
                                        <i className="icon ri-pinterest-fill"></i>
                                        <p className='text heading-s'>Share on Pinterest</p>
                                    </a>
                                </li>
                            </ul>
                            <div className="review_main">
                                <h6 className="heading heading-mm">Reviews</h6>
                                <ul className="review_ul">
                                    {BlogDetailReviewData.map((item) => (
                                        <li className='review_li' key={item.id}>
                                            <div className="profile_otr"></div>
                                            <div className="review_content">
                                                <div className="profile_details_star_otr">
                                                    <div className="profile_details">
                                                        <p className="heading heading-s">{item.name}</p>
                                                        <p className="text heading-xs">{item.date}</p>
                                                    </div>
                                                    <ul className="star_ul">
                                                        {item.starIcons.map((icon, index) => (
                                                            <li className="star_li" key={index}>{icon.icon}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p className="desc heading-xs">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="review_form mt_20">
                                <form className='form_inr'>
                                    <h6 className="heading heading-mm">Be the first to review “Message Cotton T-Shirt”</h6>
                                    <p className='desc heading-xs mb_20'>Your email address will not be published. Required fields are marked *</p>
                                    <div className="star_rating mb_20">
                                        <p className="text heading-xs">Your Rating *</p>
                                        <ul className="star_ul">
                                            <li className="star_li">
                                                <i className="star_icon ri-star-fill"></i>
                                            </li>
                                            <li className="star_li">
                                                <i className="star_icon ri-star-fill"></i>
                                            </li>
                                            <li className="star_li">
                                                <i className="star_icon ri-star-fill"></i>
                                            </li>
                                            <li className="star_li">
                                                <i className="star_icon ri-star-fill"></i>
                                            </li>
                                            <li className="star_li">
                                                <i className="star_icon ri-star-fill"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="textarea_otr">
                                        <textarea className="textarea" placeholder="Your Review"></textarea>
                                    </div>
                                    <div className="input_otr mt_20">
                                        <label className='review_input_label heading-xs'>Name *</label>
                                        <ThemeInput 
                                            inputClass='coming_soon_email'
                                            inputType='text'
                                            inputName='name'
                                            inputPlaceholder='Enter Your Full Name'
                                        />
                                    </div>
                                    <div className="input_otr mt_20 mb_20">
                                        <label className='review_input_label heading-xs'>Email Address *</label>
                                        <ThemeInput 
                                            inputClass='coming_soon_email'
                                            inputType='email'
                                            inputName='email'
                                            inputPlaceholder='Enter Your Email Address Here'
                                        />
                                    </div>
                                    <div className="form_check">
                                        <input className='checkbox' type="checkbox" />
                                        <label className='form_check_label  heading-xs'>Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                    <div className="form_action mt_20">
                                        <Button type='submit' buttonType='dark'>Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;