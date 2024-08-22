import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CollectionSection.styles.scss';

export default function CollectionCart(props) {
    const navigate = useNavigate();

    // Ensure the route prop is used correctly here
    const onNavigateHandler = () => {
        if (props.route) {
            navigate(props.route);
        }
    };

    return (
        <div className={`collection_box_inr ${props.boxClass}`} onClick={onNavigateHandler}>
            {props.image && <img className='background_img' src={props.image} alt="" />}
            <div className="content">
                {props.text && <p className="text heading-xsm">{props.text}</p>}
                <h3 className="heading heading-h3-regular">
                    <span className='heading_inr heading-h3-bold'>{props.headingInner}</span>{props.heading}
                </h3>
                {props.description && <p className="desc heading-xs">{props.description}</p>}
            </div>
        </div>
    );
}
