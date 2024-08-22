import './Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    dark: 'dark',
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button_container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;