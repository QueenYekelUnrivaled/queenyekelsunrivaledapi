import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import Button from '../utils/Button';
import colors from '../utils/colors';
import Icons from '../utils/Icons';

import about_img from '../../assets/home/about-img.png';
import class_1 from '../../assets/home/class-1.png';
import class_2 from '../../assets/home/class-2.png';
import class_3 from '../../assets/home/class-3.png';
import team_1 from '../../assets/home/team_1.webp';
import team_2 from '../../assets/home/team_2.webp';
import team_3 from '../../assets/home/team_3.webp';

const Home = () => {
    return (
        <PublicContainer footer footer_image>
            <div className='main mg-b-40'>
                <section className='flex align-center slider-area'>
                    <div className='grid container'>
                        <div className='col-lg-6 col-md-6 col-sm-11 col-xs-12 pd-l-15 pd-r-15'>
                            <div className='hero__caption pd-100'>
                                <h1 className='__title'>
                                    Quality <br /> Learning
                                </h1>
                                <span className='__sub-title'>For Every Child</span>

                                <Button type='link' link={ROUTE_LINKS.REGISTERATION} className='btn btn-link circle enroll-now'>
                                    <span>Enroll Now</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='about-low-area wrapper pd-t-50 pd-b-50'>
                    <div className='grid container'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-20'>
                            <div className='section-title'>
                                <h2 className='mg-b-10'>
                                    welcome to our <span style={{ color: colors.light_red }}>kindergarten</span>
                                </h2>
                                <p className='mg-b-10'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</p>
                            </div>
                        </div>
                        <div className='__about-features __features-container grid col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-center'>
                            <div className='features col-lg-5 col-md-5 col-sm-5 col-xs-12'>
                                <div className='flex about-caption align-center'>
                                    <div className='features-icon mg-r-20'>
                                        <Icons name='IconAbout1' color={colors.color_font_1} size={45} />
                                    </div>
                                    <div className='features-caption'>
                                        <h3 style={{ color: colors.color_font_1 }}>Inter School Sports</h3>
                                        <p>The words you use in your written communica speak volumes.</p>
                                    </div>
                                </div>
                                <div className='flex about-caption align-center'>
                                    <div className='features-icon mg-r-20'>
                                        <Icons name='IconAbout2' color={colors.color_font_2} size={45} />
                                    </div>
                                    <div className='features-caption'>
                                        <h3 style={{ color: colors.color_font_2 }}>Friendly Environment</h3>
                                        <p>The words you use in your written communica speak volumes.</p>
                                    </div>
                                </div>
                                <div className='flex about-caption align-center'>
                                    <div className='features-icon mg-r-20'>
                                        <Icons name='IconAbout3' color={colors.color_font_3} size={45} />
                                    </div>
                                    <div className='features-caption'>
                                        <h3 style={{ color: colors.color_font_3 }}>Multimedia Class</h3>
                                        <p>The words you use in your written communica speak volumes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                                <div className='about-img'>
                                    <img src={about_img} alt='img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='class-offer-area wrapper pd-t-50 pd-b-50'>
                    <div className='grid container mg-t-70'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-20'>
                            <div className='section-title'>
                                <h2 className='mg-b-10'>Classes We Offer</h2>
                                <p className='mg-b-10'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
                            </div>
                        </div>
                        <div className='__class-offer-activities __features-container col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-center'>
                            <div className='features flex justify-space-between align-center'>
                                <div className='card pd-b-10'>
                                    <img src={class_1} alt='class' className='image-header' />
                                    <div className='card-content features-caption'>
                                        <Link to={ROUTE_LINKS.NEWS}>
                                            <h3>Intelligent Challenge</h3>
                                        </Link>
                                        <p>The words you use in your written communica speak volumes. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, molestiae!</p>
                                        <Button type='link' className='btn btn-link enroll-now circle mg-t-10 flex justify-center' link='/news'>
                                            View More
                                        </Button>
                                    </div>
                                </div>
                                <div className='card pd-b-10'>
                                    <img src={class_2} alt='class' className='image-header' />
                                    <div className='card-content features-caption'>
                                        <Link to={ROUTE_LINKS.NEWS}>
                                            <h3>Intelligent Challenge</h3>
                                        </Link>
                                        <p>The words you use in your written communica speak volumes.</p>
                                        <Button type='link' className='btn btn-link enroll-now circle mg-t-10 flex justify-center' link='/news'>
                                            View More
                                        </Button>
                                    </div>
                                </div>
                                <div className='card pd-b-10'>
                                    <img src={class_3} alt='class' className='image-header' />
                                    <div className='card-content features-caption'>
                                        <Link to={ROUTE_LINKS.NEWS}>
                                            <h3>Intelligent Challenge</h3>
                                        </Link>
                                        <p>The words you use in your written communica speak volumes.</p>
                                        <Button type='link' className='btn btn-link enroll-now circle mg-t-10 flex justify-center' link='/news'>
                                            View More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='date-events pd-t-80 pd-b-80'>
                    <div className='pd-r-20 pd-l-20'>
                        <div className='wrapper'>
                            <span style={{ color: colors.light_red, fontWeight: '600' }}>18 Jan 2021</span>
                            <div className='__title-about'>
                                <div className='section-title'>
                                    <h2 className='mg-b-10'>Drawing Event</h2>
                                    <p className='mg-b-10'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today moving in fourth.</p>
                                </div>
                                <Button type='link' className='btn btn-link enroll-now circle mg-t-20 flex justify-center' link={ROUTE_LINKS.REGISTERATION}>
                                    Enroll Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='team-area wrapper pd-b-20'>
                    <div className='grid container mg-t-70'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-20'>
                            <div className='section-title'>
                                <h2 className='mg-b-10'>Expert Teachers</h2>
                                <p className='mg-b-10'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
                            </div>
                        </div>
                        <div className='__team-active __features-container grid col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-center'>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={team_1} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Jason Clary</h3>
                                    <p>Sport Instructor</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={team_2} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Jason Clary</h3>
                                    <p>Sport Instructor</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={team_3} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Jason Clary</h3>
                                    <p>Sport Instructor</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={team_1} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Jason Clary</h3>
                                    <p>Sport Instructor</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    );
};

export default Home;
