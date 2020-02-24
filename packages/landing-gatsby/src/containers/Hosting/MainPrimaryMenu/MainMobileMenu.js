import React from "react";
import { Link } from "gatsby";

import "./mobilemenu.css"

const MainMobilemenu1 = () => {

    const SolutionMobMenu = () => {
        document.getElementById('mainmobilemenu').style.display = 'none';
        document.getElementById('solutionmobilemenu').style.display = 'block';
    }
    const HomeMobMenu = () => {
        document.getElementById('mainmobilemenu').style.display = 'block';
        document.getElementById('solutionmobilemenu').style.display = 'none';
    }
    const BusDropMenu = () => {
        let x = document.getElementById('BusDrop');
        if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}
    }
    const IndDropMenu = () => {
        let x = document.getElementById('IndDrop');
        if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}
    }
    const ExprtDropMenu = () => {
        let x = document.getElementById('ExprtDrop');
        if (x.style.display === "none") {x.style.display = "block";} else {x.style.display = "none";}
    }
    return (
        <div className="Mobile_menu_container">
            <ul className="scrollspy__menu mobile_menu" id="mainmobilemenu">
                <li onClick={SolutionMobMenu}>Solutions <span className="Mobile_caret"> &#9654;</span></li>
                <li>Services <span className="Mobile_caret"> &#9654;</span></li>
                <li>Products <span className="Mobile_caret"> &#9654;</span></li>
                <li>Blog <span className="Mobile_caret"> &#9654;</span></li>
                <li>Contact <span className="Mobile_caret"> &#9654;</span></li>
                <li>About <span className="Mobile_caret"> &#9654;</span></li>
            </ul>
            <ul className="scrollspy__menu mobile_menu mobile_sub_menu" id="solutionmobilemenu">
                <li onClick={HomeMobMenu} className="Mobile_menu_back">
                    <span>&#9664;</span>
                </li>
                <li>
                    <span onClick={BusDropMenu}>Business Model <span className="Mobile_caret"> &#9660;</span></span>
                    <ul className="mobile_drop_menu" id="BusDrop">
                        <li>
                            <Link to="/b2c">
                                <span>B2C</span>
                            </Link>
                        </li>
                        <li>
                        <Link to="/b2b">
                            <span>B2B</span>
                        </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={IndDropMenu}>Industry <span className="Mobile_caret"> &#9660;</span></span>
                     <ul className="mobile_drop_menu" id="IndDrop">
                        <li>Retail</li>
                        <li>Banking</li>
                        <li>Telecom</li>
                        <li>Food & Grocery</li>
                        <li>Government & Education</li>
                    </ul>
                </li>
                <li>
                    <span onClick={ExprtDropMenu}>Expertise <span className="Mobile_caret"> &#9660;</span></span>
                    <ul className="mobile_drop_menu" id="ExprtDrop">
                        <li>Commerce</li>
                        <li>Digital Experience & CX</li>
                        <li>Order Management</li>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Automation & AI</li>
                        <li>IOT & BlockChain</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}

export default MainMobilemenu1