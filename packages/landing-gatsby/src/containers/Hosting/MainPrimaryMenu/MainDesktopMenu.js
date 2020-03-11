import React from 'react';
// import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Button from 'common/src/components/Button';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Box from 'common/src/components/Box';
import DrcFeatureMenu from '../../../../../common/src/assets/image/hosting/Menu/drccover.gif';
import UCFeatureMenu from '../../../../../common/src/assets/image/hosting/Menu/uccover.png';
import DRCIcon from '../../../../../common/src/assets/image/hosting/Menu/Drc.svg';
import UCIcon from '../../../../../common/src/assets/image/hosting/Menu/UC.svg';
import StoreIcon from '../../../../../common/src/assets/image/hosting/Menu/storefront.svg';
import CompanyIcon from '../../../../../common/src/assets/image/hosting/Menu/company.svg';
import TeamIcon from '../../../../../common/src/assets/image/hosting/Menu/team.svg';
import PartnersIcon from '../../../../../common/src/assets/image/hosting/Menu/partners.svg';
import CustomersIcon from '../../../../../common/src/assets/image/hosting/Menu/customers.svg';
import MediaIcon from '../../../../../common/src/assets/image/hosting/Menu/media.svg';

import MainDesktopNav, {
  MainNavbarUl,
  MainNavbarLi,
  MainNavbarDropUl,
  MainNavbarDropLi,
  MainNavbarDropMainLi,
  MainNavbarDropBox,
  MainNavFlexbox,
} from './MainDesktopMenu.style';

const Maindeskmenu1 = button => (
  <MainDesktopNav>
    <MainNavbarUl className="scrollspy__menu main_menu">
      <MainNavbarLi className="firstmenu">
        <span className="main_menu_head">
          Solutions <span className="desk_arrow_down">&#9660;</span>
        </span>
        <MainNavbarDropBox className="desktop_menu_drop_effect">
          <MainNavFlexbox className="Desktop_menu_shadow">
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Expertise</MainNavbarDropMainLi>
              <div className="empty_space10" />
              <MainNavbarDropLi>
                <Link to="solutions/b2c">B2C</Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/b2b">
                  <span>B2B</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="/solutions/market-places">
                  <span>Market Places</span>
                </Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Industry</MainNavbarDropMainLi>
              <div className="empty_space10" />
              <MainNavbarDropLi>
                <Link to="solutions/retail">
                  <span>Retail</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/banking">
                  <span>Banking</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/telecom">
                  <span>Telecom</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/food-grocery">
                  <span>Food & Grocery</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/government-education">
                  <span>Government & Education</span>
                </Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Capability</MainNavbarDropMainLi>
              <div className="empty_space10" />
              <MainNavbarDropLi>
                <Link to="solutions/headless-commerce">Headless Commerce</Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/omnichannel">Omnichannel</Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/digital-experience-cx">
                  Digital Experience & CX
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/order-management">Order Management</Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/experience-analytics">
                  Experience Analytics
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/marketing">Marketing</Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/automation-ai">
                  <span>Automation & AI</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/iot-blockchain">IOT & Blockchain</Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl className="featured_Menu">
              <Box className="featured_Menu_container">
                <Box className="featured_Menu_col featured_Menu_col1">
                  <h4 style={{ marginTop: 0 }}>Features</h4>
                  <p>
                    Our Universal Commerce approach ensures a significantly
                    higher rate of success than other system integrators.
                  </p>
                  <Link to="/contact">
                    <Button {...button} title="Learn More" />
                  </Link>
                </Box>
                <Box className="featured_Menu_col featured_Menu_col2">
                  <img src={UCFeatureMenu} alt="universal commerce features" />
                </Box>
              </Box>
            </MainNavbarDropUl>
          </MainNavFlexbox>
        </MainNavbarDropBox>
      </MainNavbarLi>
      <MainNavbarLi>
        <span className="main_menu_head">
          Services <span className="desk_arrow_down">&#9660;</span>
        </span>
        <MainNavbarDropBox className="desktop_menu_drop_effect">
          <MainNavFlexbox className="Desktop_menu_shadow">
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Consulting</MainNavbarDropMainLi>
              <div className="empty_space10" />
              <MainNavbarDropLi>
                <Link to="services/dr-commerce">
                  <span>Dr. Commerce</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/strategy-roadmap">
                  <span>Strategy & Roadmap</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/analytics-insights">
                  <span>Analytics & Insights</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/cloud-transformation">
                  <span>Cloud Transformation</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/5G">
                  <span>5G</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/microservice-mesh">
                  <span>Microservice & Mesh</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/social-commerce">
                  <span>Social Commerce</span>
                </Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Delivery</MainNavbarDropMainLi>
              <div className="empty_space10" />
              <MainNavbarDropLi>
                <Link to="services/agile-teams">
                  <span>Agile Teams</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/managed-services">
                  <span>Managed Services</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/offshore-dev-center">
                  <span>Offshore Dev Center</span>
                </Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Technology</MainNavbarDropMainLi>
              <div className="empty_space10" />
              <MainNavbarDropLi>
                <Link to="services/elastic-path">
                  <a>Elastic Path</a>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/hcl-commerce">
                  <span>HCL Commerce</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/core-media">
                  <span>Core Media</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/ibm-redhat">
                  <span>IBM & Red Hat</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/drupal-commerce">
                  <span>Drupal Commerce</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/apis-graphql">
                  <span>APIs & GraphQL</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/jamstact-gatsby">
                  <span>JAMStack & Gatsby</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/magneto">
                  <span>Magento</span>
                </Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl className="featured_Menu">
              <Box className="featured_Menu_container">
                <Box className="featured_Menu_col featured_Menu_col1">
                  <h4 style={{ marginTop: 0 }}>Features</h4>
                  <p>
                    Personalized eCommerce health check and remedies that boost
                    your ecosystem’s health and ensure it is future proof.
                  </p>
                  <Link to="/contact">
                    <Button {...button} title="Learn More" />
                  </Link>
                </Box>
                <Box className="featured_Menu_col featured_Menu_col2">
                  <img src={DrcFeatureMenu} alte="dr commerce feature" />
                </Box>
              </Box>
            </MainNavbarDropUl>
          </MainNavFlexbox>
        </MainNavbarDropBox>
      </MainNavbarLi>
      <MainNavbarLi className="Menu_position_rel">
        <span className="main_menu_head">
          Product <span className="desk_arrow_down">&#9660;</span>
        </span>
        <MainNavbarDropBox className="Menu_desktop_set desktop_menu_drop_effect">
          <MainNavFlexbox className="Menu_desktop_box Desktop_menu_shadow">
            <MainNavbarDropUl className="Desktop_Menu_stepped2">
              <MainNavbarDropLi>
                <Link to="product/universal-commerce">
                  <img src={UCIcon} />
                  <div>Universal Commerce Suite</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="product/universal-retail-dashboard">
                  <img src={UCIcon} />
                  <div>Universal Retail Dashboard</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="product/universal-virtual-agent">
                  <img src={UCIcon} />
                  <div>Universal Virtual Agent</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="product/universal-automation-suite">
                  <img src={UCIcon} />
                  <div>Universal Automation Suite</div>
                </Link>
              </MainNavbarDropLi>
              {/* <MainNavbarDropLi>
                <Link to="product/dr-commerce">
                  <img src={DRCIcon} alte="dr commerce" />
                  <div>Dr. Commerce</div>
                </Link>
              </MainNavbarDropLi> */}
              <MainNavbarDropLi>
                <Link to="product/store-fronts">
                  <img src={StoreIcon} alt="store fronts" />
                  <div>Store Fronts</div>
                </Link>
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
        <span className="main_menu_head">
          About <span className="desk_arrow_down">&#9660;</span>
        </span>
        {/* <Link to="/about">
                    <span>About</span>
                </Link> */}
        <MainNavbarDropBox className="Menu_desktop_set desktop_menu_drop_effect">
          <MainNavFlexbox className="Menu_desktop_box Desktop_menu_shadow">
            <MainNavbarDropUl className="Desktop_Menu_stepped2">
              <MainNavbarDropLi>
                <Link to="about/company">
                  <img src={CompanyIcon} alt="company" />
                  <div>Company</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="about/partners">
                  <img src={PartnersIcon} alt="partners" />
                  <div>Partners</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="about/customers">
                  <img src={CustomersIcon} alt="customers" />
                  <div>Customers</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="about/media&whitepapers">
                  <img src={MediaIcon} alt="Media" />
                  <div>Media & White Papers</div>
                </Link>
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
  button: PropTypes.object,
};
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
  },
};
export default Maindeskmenu1;
