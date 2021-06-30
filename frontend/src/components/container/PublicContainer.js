import React from 'react';
import PublicFooter from '../common/PublicFooter';
import PublicHeader from '../common/PublicHeader';
import ScrollToTop from '../common/ScrollToTop';

const PublicContainer = ({ children, footer, footer_image }) => {
    return (
        <div className='queen-yekel-unrivaled'>
            <PublicHeader />
            {children}
            {footer && <PublicFooter use_image={footer_image} />}
            <ScrollToTop />
        </div>
    );
};

export default PublicContainer;
