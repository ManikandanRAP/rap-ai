import React from "react"
// import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import { Link } from "gatsby"

import Box from 'common/src/components/Box';


import MainDesktopNav, {
    MainNavbarUl,
    MainNavbarLi,
    MainNavbarDropUl,
    MainNavbarDropLi,
    MainNavbarDropMainLi,
    MainNavbarDropBox,
    MainNavFlexbox
} from './MainDesktopMenu.style';

const Maindeskmenu1 = () => (
    <MainDesktopNav>
        <MainNavbarUl className="scrollspy__menu main_menu">
            <MainNavbarLi>
                <span>Solutions</span>
                <MainNavbarDropBox>
                    <MainNavFlexbox>
                        <MainNavbarDropUl>
                            <MainNavbarDropMainLi>Business Model</MainNavbarDropMainLi>
                            <br />
                            <MainNavbarDropLi>
                                <Link to="/B2c">
                                    <span>B2C</span>
                                </Link>
                            </MainNavbarDropLi>
                            <MainNavbarDropLi>
                                <span>B2B</span>
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
                            <MainNavbarDropLi>Commerce</MainNavbarDropLi>
                            <MainNavbarDropLi>Digital Experience & CX</MainNavbarDropLi>
                            <MainNavbarDropLi>Order Management</MainNavbarDropLi>
                            <MainNavbarDropLi>Analytics</MainNavbarDropLi>
                            <MainNavbarDropLi>Marketing</MainNavbarDropLi>
                            <MainNavbarDropLi>Automation & AI</MainNavbarDropLi>
                            <MainNavbarDropLi>IOT & BlockChain</MainNavbarDropLi>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
            </MainNavbarLi>
            <MainNavbarLi>
                <span>Product</span>
                <MainNavbarDropBox>
                    <MainNavFlexbox>
                        <MainNavbarDropUl>
                            <MainNavbarDropLi>Universal Commerce</MainNavbarDropLi>
                            <MainNavbarDropLi>Dr. Commerce</MainNavbarDropLi>
                            <MainNavbarDropLi>Store Fronts</MainNavbarDropLi>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
            </MainNavbarLi>
            <MainNavbarLi>
                <span>Blog</span>
            </MainNavbarLi>
            <MainNavbarLi>
                <span>Contact</span>
            </MainNavbarLi>
            <MainNavbarLi>
                <span>About</span>
                <MainNavbarDropBox>
                    <MainNavFlexbox>
                        <MainNavbarDropUl>
                            <MainNavbarDropLi>Company</MainNavbarDropLi>
                            <MainNavbarDropLi>Team</MainNavbarDropLi>
                            <MainNavbarDropLi>Partners</MainNavbarDropLi>
                            <MainNavbarDropLi>Media & White Papers</MainNavbarDropLi>
                        </MainNavbarDropUl>
                    </MainNavFlexbox>
                </MainNavbarDropBox>
            </MainNavbarLi>
        </MainNavbarUl>
    </MainDesktopNav>
);

export default Maindeskmenu1