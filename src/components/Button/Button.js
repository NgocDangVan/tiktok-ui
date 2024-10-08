import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to, 
    href, 
    primary = false, 
    outline = false, 
    small = false, 
    large = false, 
    text = false, 
    rounded = false, 
    disable = false, 
    children, 
    onClick, 
    className,
    leftIcon,
    rightIcon,
    ...passProps 
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when btn is disable
    if(disable){
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        });
    }

    if(to){
        props.to = to;
        Comp = Link;
    } else if(href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });

    return (
        <Comp className = {classes} {...props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon}</span>}
        </Comp>
    );
}

// Mong đợi những gì có thể Render được (React Node)
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
}

export default Button;