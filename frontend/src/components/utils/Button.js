import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/utils/button.sass';

const ButtonLink = ({ children, className, link, ...rest }) => {
    return (
        <div className={className}>
            <Link to={link} {...rest}>
                {children}
            </Link>
        </div>
    );
};

const Buttons = ({ children, className, type, ...rest }) => {
    return (
        <button type={type} title={rest?.title} className={`btn ${className}`} {...rest}>
            {children}
        </button>
    );
};

const Button = ({ children, type, ...rest }) => {
    switch (type) {
        case 'link':
            return <ButtonLink {...rest}>{children}</ButtonLink>;

        case 'submit':
            return <Buttons {...rest}>{children}</Buttons>;

        default:
            break;
    }
};

export default Button;
