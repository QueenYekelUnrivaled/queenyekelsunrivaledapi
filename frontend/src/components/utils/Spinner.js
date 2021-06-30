import React from 'react';
import PropTypes from 'prop-types';

import colors from './colors';

function Spinner({ visible, size = 16, backgroundColor = colors.u_seconday, className, ...rest }) {
    if (!visible) return null;
    const width = (size / 16).toString() + 'rem';
    return (
        <div className={`loader-container ${className}`} style={{ ...rest }}>
            <div
                style={{
                    borderLeftColor: backgroundColor,
                    height: width,
                    width,
                }}
                className='loader'
            ></div>
        </div>
    );
}
export default Spinner;

Spinner.propTypes = {
    visible: PropTypes.bool.isRequired,
};
