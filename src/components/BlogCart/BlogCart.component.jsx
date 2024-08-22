import React from 'react'
import { Link } from 'react-router-dom';

import './BlogCart.styles.scss';

function BlogCart(props) {
    return (
        <div className='blog_cart_container'>
            <Link className="img_otr" to={props.to}>
                <img className='img' src={props.Image} alt='img' />
            </Link>
            <div className="cart_details">
                <div className="admin_date_otr">
                    <p className="text heading-xs">{props.Admin}</p>
                    <p className="text heading-xs">{props.Date}</p>
                </div>
                <Link className='heading heading-mm' to={props.to}>{props.Heading}</Link>
                <p className="desc heading-xs">{props.Description}</p>
                <div className="action_otr">
                    <Link to={props.to} className="primary_underline_btn">{props.ButtonText}</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCart;
