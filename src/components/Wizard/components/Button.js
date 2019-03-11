import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
    <div className="custom-btn" onClick={onClick}>
        {children}
    </div>
);

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button;
