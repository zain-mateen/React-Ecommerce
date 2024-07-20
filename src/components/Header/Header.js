import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import brandLogo from '../../img/brandLogo.webp';
import { HeaderTools, NavigationItems, SocialIcons } from '../../Data';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isResponsiveNavbarVisible, setResponsiveNavbarVisible] = useState(false);

    const handleToggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const handleToggleResponsiveNavbar = () => {
        setResponsiveNavbarVisible(!isResponsiveNavbarVisible);
    };

    const handleCloseResponsiveNavbar = () => {
        setResponsiveNavbarVisible(false);
    };

    return (
        <>
            <section className={`navbar_responsive ${isResponsiveNavbarVisible ? 'open' : ''}`}>
                <div className="container_fluid">
                    <div className="logo_main">
                        <Link className='logo_otr'>
                            <img className='logo_img' src={brandLogo} alt="Brand Logo" />
                        </Link>
                        <div className="close_menu_icon" onClick={handleCloseResponsiveNavbar}>
                            <i className="icon ri-close-line"></i>
                        </div>
                    </div>
                    <ul className="menu_ul">
                        {NavigationItems.map((item) => (
                            <li className="menu_li" key={item.id}>
                                <Link className='menu_linkk heading-sm' to={item.link} onClick={() => handleToggleDropdown(item.id)}>
                                    {item.name}
                                    {item.PagesInnerLink && item.PagesInnerLink.length > 0 && (
                                        <i className={`icon ri-add-line toggle_icon ${openDropdown === item.id ? 'rotate' : ''}`}></i>
                                    )}
                                </Link>
                                {item.PagesInnerLink && item.PagesInnerLink.length > 0 && (
                                    <div className={`dropdown_otr ${openDropdown === item.id ? 'show' : ''}`}>
                                        <ul className="dropdown_ul">
                                            {item.PagesInnerLink.map((innerItem) => (
                                                <li className="dropdown_li" key={innerItem.id}>
                                                    <Link className='dropdown_linkk heading-xsm' to={innerItem.link}>
                                                        <span>{innerItem.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
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
            </section>
            <header className='header'>
                <div className="container">
                    <div className="header_inr">
                        <div className="menu_icon_otr" onClick={handleToggleResponsiveNavbar}>
                            <i className="icon ri-menu-2-line"></i>
                        </div>
                        <div className="logo_menu_otr">
                            <div className="logo_otr">
                                <Link className='logo_inr' to='/'>
                                    <img className='logo_img' src={brandLogo} alt="Brand Logo" />
                                </Link>
                            </div>
                            <nav className="menu_otr">
                                <ul className="menu_ul">
                                    {NavigationItems.map((item) => (
                                        <li className="menu_li" key={item.id}>
                                            <Link className='menu_linkk heading-sm' to={item.link}>
                                                {item.name}
                                            </Link>
                                            {item.PagesInnerLink && item.PagesInnerLink.length > 0 && (
                                                <div className="dropdown_otr">
                                                    <ul className="dropdown_ul">
                                                        {item.PagesInnerLink.map((innerItem) => (
                                                            <li className="dropdown_li" key={innerItem.id}>
                                                                <Link className='dropdown_linkk heading-xsm' to={innerItem.link}>
                                                                    <span>{innerItem.name}</span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <ul className="header_tools_ul">
                            {HeaderTools.map((item) => (
                                <li className="header_tools_li" key={item.id}>
                                    <div className="icon_otr">
                                        {item.icon}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
