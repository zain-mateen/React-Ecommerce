import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import brandLogo from '../../img/brandLogo.webp';
import { HeaderTools, NavigationItems } from '../../Data';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header_inr">
                    <div className="menu_icon_otr">
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
    );
}

export default Header;
