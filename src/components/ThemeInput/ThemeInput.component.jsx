import React from 'react'

import './ThemeInput.styles.scss';

function ThemeInput(props) {
    return (
        <div className='input_otr'>
            <input 
                className={props.inputClass} 
                type={props.inputType} 
                name={props.inputName} 
                placeholder={props.inputPlaceholder} 
            />
        </div>
    )
}

export default ThemeInput
