import React from 'react'
import { Link } from 'react-router-dom'

import './CollectionSection.scss';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

export default function CollectionCart(props) {
    return (
        <div className={`collection_box_inr ${props.boxClass}`}>
            {props.image && <img className='background_img' src={props.image} alt="" />}
            <div className="content">
                {props.text && <p className="text heading-s">{props.text}</p>}
                <h3 className="heading heading-h3-regular"><span className='heading_inr heading-h3-bold'>{props.headingInner}</span>{props.heading}</h3>
                {props.description && <p className="desc heading-xs">{props.description}</p>}
                <Link className="action_otr">
                    <ThemeBtn 
                        ButtonClass='primary_underline_btn shop_btn'
                        ButtonText='Shop Now'
                    />
                </Link>
            </div>
        </div>
    )
}
