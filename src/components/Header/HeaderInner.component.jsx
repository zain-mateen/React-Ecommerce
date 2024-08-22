import React from 'react'

export default function HeaderInner(props) {
    return (
        <div className="headerInner">
            <h2 className="heading heading-h2-medium">{props.heading}<span className='heading_inr heading-h2-bold'>{props.headingInner}</span></h2>
        </div>
    )
}
