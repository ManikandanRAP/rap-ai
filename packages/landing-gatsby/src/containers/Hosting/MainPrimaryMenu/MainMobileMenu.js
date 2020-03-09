import React from 'react';
import { Link } from 'gatsby';

import './mobilemenu.css';

const MainMobilemenu1 = () => {
  const goHome = () => {
    document
      .getElementById('Mobile_menu_container')
      .classList.remove('sub_Menu');
    document.getElementById('mainmobilemenu').style.display = 'block';
    document.getElementById('solutionsmenu').style.display = 'none';
    document.getElementById('servicesmenu').style.display = 'none';
    document.getElementById('productsmenu').style.display = 'none';
    document.getElementById('aboutsmenu').style.display = 'none';
  };

  const SolutionsMenu = () => {
    document.getElementById('mainmobilemenu').style.display = 'none';
    document.getElementById('solutionsmenu').style.display = 'block';
    document.getElementById('Mobile_menu_container').classList.add('sub_Menu');
  };
  const SolutionsSubMenu = () => {
    document.getElementById('solutionssubmenu').classList.toggle('showmenu');
  };
  // solution
  const ServicesMenu = () => {
    document.getElementById('mainmobilemenu').style.display = 'none';
    document.getElementById('servicesmenu').style.display = 'block';
    document.getElementById('Mobile_menu_container').classList.add('sub_Menu');
  };
  const ServicesSubMenu = () => {
    document.getElementById('servicessubmenu').classList.toggle('showmenu');
  };
  // services
  const ProductsMenu = () => {
    document.getElementById('mainmobilemenu').style.display = 'none';
    document.getElementById('productsmenu').style.display = 'block';
    document.getElementById('Mobile_menu_container').classList.add('sub_Menu');
  };
  const ProductsSubMenu = () => {
    document.getElementById('productssubmenu').classList.toggle('showmenu');
  };
  // products
  const AboutsMenu = () => {
    document.getElementById('mainmobilemenu').style.display = 'none';
    document.getElementById('aboutsmenu').style.display = 'block';
    document.getElementById('Mobile_menu_container').classList.add('sub_Menu');
  };
  const AboutsSubMenu = () => {
    document.getElementById('aboutssubmenu').classList.toggle('showmenu');
  };
  // about
  return (
    <>
      <div id="Mobile_menu_container">
        <span onClick={goHome} className="Mobile_caret_back">
          &#9654; Home
        </span>
        <ul className="scrollspy__menu mobile_menu" id="mainmobilemenu">
          <li onClick={SolutionsMenu}>
            Solutions<span className="Mobile_caret"> &#9654;</span>
          </li>
          <li onClick={ServicesMenu}>
            Services<span className="Mobile_caret"> &#9654;</span>
          </li>
          <li onClick={ProductsMenu}>
            Product<span className="Mobile_caret"> &#9654;</span>
          </li>
          <li onClick={AboutsMenu}>
            About<span className="Mobile_caret"> &#9654;</span>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="solutionsmenu"
        >
          <ul>
            <li onClick={SolutionsSubMenu}>
              Solutions <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu">
              <li>
                <Link to="/">Solutions1</Link>
              </li>
              <Link to="/contact">
                <li>Solutions1</li>
              </Link>
              <li>Solutions2</li>
            </ul>
          </ul>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="servicesmenu"
        >
          <ul>
            <li onClick={ServicesSubMenu}>
              Services <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu">
              <li>Services1</li>
              <li>Services2</li>
            </ul>
          </ul>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="productsmenu"
        >
          <ul>
            <li onClick={ProductsSubMenu}>
              Product <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="productssubmenu">
              <li>Products1</li>
              <li>Products2</li>
            </ul>
          </ul>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="aboutsmenu"
        >
          <ul>
            <li onClick={AboutsSubMenu}>
              About <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="aboutssubmenu">
              <li>About1</li>
              <li>About2</li>
            </ul>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default MainMobilemenu1;
