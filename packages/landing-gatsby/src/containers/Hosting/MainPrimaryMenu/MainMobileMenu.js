import React from "react";
import { Link } from "gatsby";

import "./mobilemenu.css"

const MainMobilemenu1 = () => {

    const Firstfoldmobile = () => {
        document.getElementById('mainmobilemenu').style.display = 'none';
        document.getElementById('solutionssubmenu').style.display = 'block';
    }
    const Mobilesubmenu = () => {
        document.getElementById('solutionssubdropmenu').style.display = 'block';
    }

    return (
        <>
        <div className="Mobile_menu_container">
            <ul className="scrollspy__menu mobile_menu" id="mainmobilemenu">
                <li onClick={Firstfoldmobile}>Main1 <span className="Mobile_caret"> &#9654;</span></li>
                <li onClick={Firstfoldmobile}>Main2 <span className="Mobile_caret"> &#9654;</span></li>
            </ul>
            <ul className="scrollspy__menu mobile_menu mobile_sub_menu" id="solutionssubmenu">
                <ul>
                    <li onClick={Mobilesubmenu}>Sub1 <span className="Mobile_caret"> &#9654;</span></li>
                    <ul className="mobile_drop_menu" id="solutionssubdropmenu">
                        <li>subdrop1</li>
                        <li>subdrop2</li>
                    </ul>
                </ul>
                <ul>
                    <li onClick={Mobilesubmenu}>Sub2 <span className="Mobile_caret"> &#9654;</span></li>
                    <ul className="mobile_drop_menu" id="solutionssubdropmenu">
                        <li>subdrop1</li>
                        <li>subdrop2</li>
                    </ul>
                </ul>
            </ul>
        </div>
        </>
    );
}

export default MainMobilemenu1