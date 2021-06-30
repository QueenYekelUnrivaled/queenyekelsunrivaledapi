import React from 'react';
import colors from '../utils/colors';
import Icons from '../utils/Icons';

import footer_1 from '../../assets/footer_1.webp';
import footer_2 from '../../assets/footer_2.webp';
import footer_3 from '../../assets/footer_3.webp';
import footer_4 from '../../assets/footer_4.webp';
import footer_5 from '../../assets/footer_5.webp';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';

const PublicFooter = ({ use_image }) => {
    return (
        <footer className='queen-footer'>
            {use_image && (
                <div className='footer-image flex'>
                    <img id='image-1' src={footer_1} alt='footer' />
                    <img id='image-2' src={footer_2} alt='footer' />
                    <img id='image-3' src={footer_3} alt='footer' />
                    <img id='image-4' src={footer_4} alt='footer' />
                    <img id='image-5' src={footer_5} alt='footer' />
                </div>
            )}
            <div className='flex __footer-container align-start justify-space-between'>
                <div className='queens'>
                    <h3 className='__title mg-b-20'>Queen Yekel's Unrivaled</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='contact'>
                    <h3 className='__sub-title'>Contact Us</h3>
                    <div className='flex align-center __phone'>
                        <Icons name='IconCall' size={22} color={colors.light_red} />
                        <div className='content'>
                            <p>Phone</p>
                            <span>882-569-756</span>
                        </div>
                    </div>
                    <div className='flex align-center __email'>
                        <Icons name='IconMail' size={22} color={colors.light_red} />
                        <div className='content'>
                            <p>Email</p>
                            <span>example@example.com</span>
                        </div>
                    </div>
                    <div className='flex align-center __address'>
                        <Icons name='IconLocation' size={39} color={colors.light_red} />
                        <div className='content'>
                            <p>Address</p>
                            <span>175 5th Ave Premium Area, New York, NY 10010, United States</span>
                        </div>
                    </div>
                </div>
                <div className='quick-links'>
                    <h3 className='__sub-title'>Quick Links</h3>
                    <div className='links flex'>
                        <Link to={ROUTE_LINKS.ABOUT}>About</Link>
                        <Link to={ROUTE_LINKS.REGISTERATION}>Enroll Now</Link>
                        <Link to={ROUTE_LINKS.FAQ}>Faq</Link>
                        <Link to={ROUTE_LINKS.NEWS}>News</Link>
                        <Link to={ROUTE_LINKS.TERMS_CONDITION}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className='copy-right'>
                <p>Copyright ©2021 All rights reserved</p>
            </div>
        </footer>
    );
};

export default PublicFooter;
