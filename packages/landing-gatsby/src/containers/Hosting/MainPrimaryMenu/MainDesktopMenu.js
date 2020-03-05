import React from 'react';
// import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Button from 'common/src/components/Button';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Box from 'common/src/components/Box';
import imageFeatureMenu from '../../../../../common/src/assets/image/hosting/Menu_featured_1.gif';
import DRCIcon from '../../../../../common/src/assets/image/hosting/Menu/Drc.svg';
import UCIcon from '../../../../../common/src/assets/image/hosting/Menu/UC.svg';
import StoreIcon from '../../../../../common/src/assets/image/hosting/Menu/storefront.svg';
import CompanyIcon from '../../../../../common/src/assets/image/hosting/Menu/company.svg';
import TeamIcon from '../../../../../common/src/assets/image/hosting/Menu/team.svg';
import PartnersIcon from '../../../../../common/src/assets/image/hosting/Menu/partners.svg';
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
      <MainNavbarLi>
        <span className="main_menu_head">
          Solutions <span class="desk_arrow_down">&#9660;</span>
        </span>
        <MainNavbarDropBox className="desktop_menu_drop_effect">
          <MainNavFlexbox className="Desktop_menu_shadow">
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Business Model</MainNavbarDropMainLi>
              <br />
              <MainNavbarDropLi>
                <Link to="solutions/b2c">B2C</Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="solutions/b2b">
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
                <span>Experience Analytics</span>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <span>Marketing</span>
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
                    Our Universal Commerce approach ensures significantly higher
                    rate of success than other system integrators
                  </p>
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
      <MainNavbarLi>
        <span className="main_menu_head">
          Services <span class="desk_arrow_down">&#9660;</span>
        </span>
        <MainNavbarDropBox className="desktop_menu_drop_effect">
          <MainNavFlexbox className="Desktop_menu_shadow">
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Strategy</MainNavbarDropMainLi>
              <br />
              <MainNavbarDropLi>
                <Link to="services/consulting">
                  <span>Consulting</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/analytics&insights">
                  <span>Analytics & Insights</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/cloud-transformation">
                  <span>Cloud Transformation</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/converstationAI">
                  <span>Conversation AI</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/5G">
                  <span>5G</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/microservices&mesh">
                  <span>Microservices & Mesh</span>
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
              <br />
              <MainNavbarDropLi>
                <Link to="services/delivery">
                  <span>Agile Teams</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/managedservices">
                  <span>Managed Services</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/offshoredevcenter">
                  <span>Offshore Dev Center</span>
                </Link>
              </MainNavbarDropLi>
            </MainNavbarDropUl>
            <MainNavbarDropUl>
              <MainNavbarDropMainLi>Technology</MainNavbarDropMainLi>
              <br />
              <MainNavbarDropLi>
                <Link to="services/elasticpath">
                  <span>Elastic Path</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/hclcommerce">
                  <span>HCL Commerce</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/coremedia">
                  <span>Core Media</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/ibm&redhat">
                  <span>IBM & Red Hat</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/drupalcommerce">
                  <span>Drupal Commerce</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/apis&graphql">
                  <span>APIs & GraphQL</span>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="services/jamstact&gatsby">
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
                    Our Universal Commerce approach ensures significantly higher
                    rate of success than other system integrators
                  </p>
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
        <span className="main_menu_head">
          Product <span class="desk_arrow_down">&#9660;</span>
        </span>
        <MainNavbarDropBox className="Menu_desktop_set desktop_menu_drop_effect">
          <MainNavFlexbox className="Menu_desktop_box Desktop_menu_shadow">
            <MainNavbarDropUl className="Desktop_Menu_stepped2">
              <MainNavbarDropLi>
                <Link to="product/universal-commerce">
                  <img src={UCIcon} />
                  <div>Universal Commerce</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="product/dr-commerce">
                  <img src={DRCIcon} />
                  <div>Dr. Commerce</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="product/store-fronts">
                  <img src={StoreIcon} />
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
          About <span class="desk_arrow_down">&#9660;</span>
        </span>
        {/* <Link to="/about">
                    <span>About</span>
                </Link> */}
        <MainNavbarDropBox className="Menu_desktop_set desktop_menu_drop_effect">
          <MainNavFlexbox className="Menu_desktop_box Desktop_menu_shadow">
            <MainNavbarDropUl className="Desktop_Menu_stepped2">
              <MainNavbarDropLi>
                <Link to="about/company">
                  <img src={CompanyIcon} />
                  <div>Company</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="about/team">
                  <img src={TeamIcon} />
                  <div>Team</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="about/partners">
                  <img src={PartnersIcon} />
                  <div>Partners</div>
                </Link>
              </MainNavbarDropLi>
              <MainNavbarDropLi>
                <Link to="about/media&whitepapers">
                  <img src={MediaIcon} />
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
