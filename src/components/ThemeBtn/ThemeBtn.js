import React from 'react';
import './ThemeBtn.scss';

export default function ThemeBtn(props) {
    return (
        <button className={props.ButtonClass}>
            <span>{props.ButtonText}</span>
        </button>
    )
}
