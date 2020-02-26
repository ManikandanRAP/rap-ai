import React from "react"
// import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Button from 'common/src/components/Button';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

import Box from 'common/src/components/Box';
import imageFeatureMenu from "../../../../../common/src/assets/image/hosting/Menu_featured_1.gif";
import DRCIcon from "../../../../../common/src/assets/image/hosting/Menu/Drc.svg";
import UCIcon from "../../../../../common/src/assets/image/hosting/Menu/UC.svg";
import StoreIcon from "../../../../../common/src/assets/image/hosting/Menu/storefront.svg";
import CompanyIcon from "../../../../../common/src/assets/image/hosting/Menu/company.svg";
import TeamIcon from "../../../../../common/src/assets/image/hosting/Menu/team.svg";
import PartnersIcon from "../../../../../common/src/assets/image/hosting/Menu/partners.svg";
import MediaIcon from "../../../../../common/src/assets/image/hosting/Menu/media.svg";

import MainDesktopNav, {
    MainNavbarUl,
    MainNavbarLi,
    MainNavbarDropUl,
    MainNavbarDropLi,
    MainNavbarDropMainLi,
    MainNavbarDropBox,
    MainNavFlexbox,
} from './MainDesktopMenu.style';

const Maindeskmenu1 = (button) => (
    <MainDesktopNav>
        <MainNavbarUl className="scrollspy__menu main_menu">
            <MainNavbarLi>
                <span className="main_menu_head">Solutions <span class="desk_arrow_down">&#9660;</span></span>
                <MainNavbarDropBox className="desktop_menu_drop_effect">
                    <MainNavFlexbox className="Desktop_menu_shadow">
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Business Model</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <Link to="/b2c">
                                    B2C
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/b2b">
                                    <span>B2B</span>
                                </Link>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Industry</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <span>Retail</span>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>Banking</span>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>Telecom</span>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>Food & Grocery</span>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>Government & Education</span>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Expertise</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <Link to="headless-commerce">Headless Commerce</Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="omnichannel">Omnichannel</Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="digital-experience">Digital Experience & CX</Link></MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="order-management">Order Management</Link></MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>Analytics</span></MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>Marketing</span></MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/automation-ai">
                                    <span>Automation & AI</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>IOT & BlockChain</span></MainNavbarDropLi>
                        </MainNavbarDropUl>
                        <MainNavbarDropUl className="featured_Menu">
                            <Box className="featured_Menu_container">
                                <Box className="featured_Menu_col featured_Menu_col1">
                                    <h4 style={{marginTop: 0}}>Features</h4>
                                    <p>Our Universal Commerce approach ensures significantly higher rate of success than other system integrators</p>
                                    <Link to="/contact">
                                        <Button {...button}title="Learn More" />
                                    </Link>
                                </Box>
                                <Box className="featured_Menu_col featured_Menu_col2">
                                    <img src={imageFeatureMenu} />
                                </Box>
                            </Box>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
            </MainNavbarLi>
            <MainNavbarLi>
                <span className="main_menu_head">Services <span class="desk_arrow_down">&#9660;</span></span>
                <MainNavbarDropBox className="desktop_menu_drop_effect">
                    <MainNavFlexbox className="Desktop_menu_shadow">
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Strategy</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <Link to="/Consulting">
                                    <span>Consulting</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Consulting">
                                    <span>Analytics & Insights</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/cloud-infrastructure">
                                    <span>Cloud Infrastructure</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Consulting">
                                    <span>Conversation AI</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Consulting">
                                    <span>5G</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Consulting">
                                    <span>Microservices & Mesh</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/social-commerce">
                                    <span>Social Commerce</span>
                                </Link>
                            </MainNavbarDropLi>

                        </MainNavbarDropUl>
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Delivery</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <Link to="/Delivery">
                                    <span>Agile Teams</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Delivery">
                                    <span>Managed Services</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Delivery">
                                    <span>Application Support</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Delivery">
                                    <span>Offshore Dev Center</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Delivery">
                                    <span>Engineering Dev</span>
                                </Link>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Technology</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>Elastic Path</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>HCL Commerce</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>Core Media</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>IBM & Red Hat</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>Drupal Commerce</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>APIs & GraphQL</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>JAMStack & Gatsby</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <Link to="/Technology">
                                    <span>Magento</span>
                                </Link>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                        <MainNavbarDropUl className="featured_Menu">
                            <Box className="featured_Menu_container">
                                <Box className="featured_Menu_col featured_Menu_col1">
                                    <h4 style={{marginTop: 0}}>Features</h4>
                                    <p>Our Universal Commerce approach ensures significantly higher rate of success than other system integrators</p>
                                    <Link to="/contact">
                                        <Button {...button} title="Learn More" />
                                    </Link>
                                </Box>
                                <Box className="featured_Menu_col featured_Menu_col2">
                                    <img src={imageFeatureMenu} />
                                </Box>
                            </Box>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
            </MainNavbarLi>
            <MainNavbarLi className="Menu_position_rel">
                <span className="main_menu_head">Product <span class="desk_arrow_down">&#9660;</span></span>
                <MainNavbarDropBox className="Menu_desktop_set desktop_menu_drop_effect">
                    <MainNavFlexbox className="Menu_desktop_box Desktop_menu_shadow">
                        <MainNavbarDropUl className="Desktop_Menu_stepped2">
                            <MainNavbarDropLi>
                                <img src={UCIcon}/>
                                <Link to="/universal-commerce">
                                    <span>Universal Commerce</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={DRCIcon}/>
                                <Link to="/dr-commerce">
                                    <span>Dr. Commerce</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={StoreIcon}/>
                                <Link to="/store-fronts">
                                    <span>Store Fronts</span>
                                </Link>
                                <div></div>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
                {/* <p>Horizontal structure; remove Menu_position_rel from navbarli</p>
                <MainNavbarDropBox className="Desktop_Menu_sized">
                    <MainNavFlexbox>
                        <MainNavbarDropUl className="Desktop_Menu_stepped">
                            <MainNavbarDropLi>
                                <img src={UCIcon}/>
                                <Link to="/Universal-Commerce">
                                    <span>Universal Commerce</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={DRCIcon}/>
                                <Link to="/Dr-Commerce">
                                    <span>Dr. Commerce</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={UCIcon}/>
                                <Link to="/Store-Fronts">
                                    <span>Store Fronts</span>
                                </Link>
                                <div></div>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
                <p>Horizontal structure</p> */}
            </MainNavbarLi>
            <MainNavbarLi className="Menu_position_rel">
                <span className="main_menu_head">About <span class="desk_arrow_down">&#9660;</span></span>
                {/* <Link to="/about">
                    <span>About</span>
                </Link> */}
                <MainNavbarDropBox className="Menu_desktop_set desktop_menu_drop_effect">
                    <MainNavFlexbox className="Menu_desktop_box Desktop_menu_shadow">
                        <MainNavbarDropUl className="Desktop_Menu_stepped2">
                            <MainNavbarDropLi>
                                <img src={CompanyIcon}/>
                                <Link to="/company">
                                    <span>Company</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={TeamIcon}/>
                                <Link to="/team">
                                    <span>Team</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={PartnersIcon}/>
                                <Link to="/partners">
                                    <span>Partners</span>
                                </Link>
                                <div></div>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <img src={MediaIcon}/>
                                <Link to="/media&whitepapers">
                                    <span>Media & White Papers</span>
                                </Link>
                                <div></div>
                            </MainNavbarDropLi>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
            </MainNavbarLi>
            <MainNavbarLi>
                <Link to="/blog">
                    <span className="main_menu_head">Blog</span>
                </Link>
            </MainNavbarLi>
            <MainNavbarLi>
                <Link to="/contact">
                    <span className="main_menu_head">Contact</span>
                </Link>
            </MainNavbarLi>
        </MainNavbarUl>
    </MainDesktopNav>
);

Maindeskmenu1.propTypes = {
    button: PropTypes.object
}
Maindeskmenu1.defaultProps = {
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '600',
        color: 'white',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        colors: 'primaryWithBg',
        minHeight: 'auto',
        height: `${1}`,
    }
}
export default Maindeskmenu1