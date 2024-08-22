import React, {useState} from 'react';
import './Footer.styles.scss';

import { Link } from 'react-router-dom';
import { PaymentLogos, FooterNavigationData, SocialIcons, LangCurrencyData } from '../../Data';
import ThemeInput from '../ThemeInput/ThemeInput.component';

import brandLogo from '../../img/brandLogo.webp';

const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(LangCurrencyData[0].selectTitle);
    const [selectedCurrency, setSelectedCurrency] = useState(LangCurrencyData[1].selectTitle);
  
    const handleLanguageChange = (e) => {
      setSelectedLanguage(e.target.value);
    };
  
    const handleCurrencyChange = (e) => {
      setSelectedCurrency(e.target.value);
    };

    return (
        <div className='Footer'>
            <div className="container footer_inr">
                <div className="row row_custom">
                    <div className="col-lg-3 col_logo_otr">
                        <div className="col_logo_inr">
                            <Link className='logo_otr' to='/'>
                                <img className='logo' src={brandLogo} alt='Brand Logo' />
                            </Link>
                            <p className="desc heading-xs">
                                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                            </p>
                            <ul className="link_ul">
                                <li className="link_li">
                                    <a href="mailto:sale@uomo.com" className="link_a heading-xsm">sale@uomo.com</a>
                                </li>
                                <li className="link_li">
                                    <a href="tel:+1 246-345-0695" className="link_a heading-xsm">+1 246-345-0695</a>
                                </li>
                            </ul>
                            <ul className="social_ul">
                                {SocialIcons.map((icon) => (
                                    <div className="social_li" key={icon.id}>
                                        <a href='/' className="social_a">
                                            {icon.icon}
                                        </a>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {FooterNavigationData.map((item) => (
                        <div className="col-lg-2 col-md-6 col-sm-6 col_navigation_otr" key={item.id}>
                            <div className="col_navigation_inr">
                                <h5 className="heading heading-mm">{item.heading}</h5>
                                <ul className="navigate_ul">
                                    {item.NavigationItems.map((navigate) => (
                                        <li className="navigate_li" key={navigate.id}>
                                        <Link className="navigate_linkk heading-xsm" to='/'>{navigate.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-3 col-md-6 col-sm-6 col_contact_otr">
                        <div className="col_contact_inr">
                            <h5 className="heading heading-mm">Subscribe</h5>
                            <p className='desc heading-xs'>Be the first to get the latest news about trends, promotions, and much more!</p>
                            <form className="input_main">
                                <ThemeInput 
                                    inputClass= 'input'
                                    inputType= 'Email'
                                    inputName= 'email'
                                    inputPlaceholder= 'Your email Address'
                                />
                                <input className='submit_btn heading-xsm' type="submit" value="Submit" />
                            </form>
                            <div className="payment_otr">
                                <p className="text heading-xsm">Secure Payment</p>
                                    <ul className="payment_ul">
                                        {PaymentLogos.map((logo) => (
                                            <li className="payment_li" key={logo.id}>
                                                <img className='payment_img' src={logo.logo} alt={logo.logoText} />
                                            </li>
                                        ))}
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container copyright_inr'>
                <p className="text heading-xs">©2024 Uomo</p>
                <div className="language_currency_main">
                    {LangCurrencyData.map((data) => (
                        <div className='selector_main' key={data.id}>
                            <h3 className='selector_heading'>{data.heading}</h3>
                            <select className='selector' value={data.heading === 'Language' ? selectedLanguage : selectedCurrency} onChange={data.heading === 'Language' ? handleLanguageChange : handleCurrencyChange}>
                                {data.selectItems.map((item) => (
                                <option key={item.id} value={item.name}>
                                    {item.name}
                                </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
