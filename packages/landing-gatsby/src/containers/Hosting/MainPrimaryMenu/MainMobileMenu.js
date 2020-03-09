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
  const SolutionsSubMenu2 = () => {
    document.getElementById('solutionssubmenu2').classList.toggle('showmenu');
  };
  const SolutionsSubMenu3 = () => {
    document.getElementById('solutionssubmenu3').classList.toggle('showmenu');
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
  const ServicesSubMenu2 = () => {
    document.getElementById('servicessubmenu2').classList.toggle('showmenu');
  };
  const ServicesSubMenu3 = () => {
    document.getElementById('servicessubmenu3').classList.toggle('showmenu');
  };
  // services
  const ProductsMenu = () => {
    document.getElementById('productsmenu').classList.toggle('showmenu');
  };
  // products
  const AboutsMenu = () => {
    document.getElementById('aboutsmenu').classList.toggle('showmenu');
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
          <ul
            className="scrollspy__menu mobile_menu mobile_sub_menu mobile_drop_menu"
            id="productsmenu"
          >
            <Link to="/services/universal-commerce">
              <li>Universal Commerce</li>
            </Link>
            <Link to="/services/dr-commerce">
              <li>DR. Commerce</li>
            </Link>
            <Link to="/services/store-fronts">
              <li>Store Fronts</li>
            </Link>
          </ul>
          <li onClick={AboutsMenu}>
            About<span className="Mobile_caret"> &#9654;</span>
          </li>
          <ul
            className="scrollspy__menu mobile_menu mobile_sub_menu mobile_drop_menu"
            id="aboutsmenu"
          >
            <Link to="/services/company">
              <li>Company</li>
            </Link>
            <Link to="/services/partners">
              <li>Partners</li>
            </Link>
            <Link to="/services/customers">
              <li>Customers</li>
            </Link>
            <Link to="/services/media-white-papers">
              <li>Media & White Papers</li>
            </Link>
          </ul>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="solutionsmenu"
        >
          <ul>
            <li onClick={SolutionsSubMenu}>
              Business Model <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu">
              <Link to="/solutions/b2c">
                <li>B2C</li>
              </Link>
              <Link to="/solutions/b2b">
                <li>B2B</li>
              </Link>
              <Link to="/solutions/market-place">
                <li>Market Place</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={SolutionsSubMenu2}>
              Industry <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu2">
              <Link to="/solutions/retail">
                <li>Retail</li>
              </Link>
              <Link to="/solutions/banking">
                <li>Banking</li>
              </Link>
              <Link to="/solutions/telecom">
                <li>Telecom</li>
              </Link>
              <Link to="/solutions/food-grocery">
                <li>Food & Grocery</li>
              </Link>
              <Link to="/solutions/government-education">
                <li>Government & Education</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={SolutionsSubMenu3}>
              Expertise <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu3">
              <Link to="/solutions/headless-commerce/">
                <li>Headless Commerce</li>
              </Link>
              <Link to="/solutions/omnichannel">
                <li>Omnichannel</li>
              </Link>
              <Link to="/solutions/digital-experience-cx">
                <li>Digital Experience & CX</li>
              </Link>
              <Link to="/solutions/order-management">
                <li>Order Management</li>
              </Link>
              <Link to="/solutions/experience-analytics">
                <li>Experience Analytics</li>
              </Link>
              <Link to="/solutions/marketing">
                <li>Marketing</li>
              </Link>
              <Link to="/solutions/automation-ai">
                <li>Automation & AI</li>
              </Link>
              <Link to="/solutions/iot-blockchain">
                <li>IOT & Blockchain</li>
              </Link>
            </ul>
          </ul>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="servicesmenu"
        >
          <ul>
            <li onClick={ServicesSubMenu}>
              Strategy <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu">
              <Link to="/services/consulting">
                <li>Consulting</li>
              </Link>
              <Link to="/services/analytics-insights">
                <li>Analytics & Insights</li>
              </Link>
              <Link to="/services/cloud-transformation">
                <li>Cloud Transformation</li>
              </Link>
              <Link to="/services/conversation-ai">
                <li>Conversation AI</li>
              </Link>
              <Link to="/services/5g">
                <li>5G</li>
              </Link>
              <Link to="/services/microservices-mesh">
                <li>Microservices & Mesh</li>
              </Link>
              <Link to="/services/social-commerce">
                <li>Social Commerce</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={ServicesSubMenu2}>
              Delivery <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu2">
              <Link to="/services/agile-teams">
                <li>Agile Teams</li>
              </Link>
              <Link to="/services/managed-services">
                <li>Managed Services</li>
              </Link>
              <Link to="/services/offshore-dev-center">
                <li>Offshore Dev Center</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={ServicesSubMenu3}>
              Technology <span className="Mobile_caret"> &#9654;</span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu3">
              <Link to="/services/elastic-path">
                <li>Elastic Path</li>
              </Link>
              <Link to="/services/hcl-commerce">
                <li>HCL Commerce</li>
              </Link>
              <Link to="/services/core-media">
                <li>Core Media</li>
              </Link>
              <Link to="/services/ibm-redhat">
                <li>IBM & Redhat</li>
              </Link>
              <Link to="/services/drupal-commerce">
                <li>Drupal Commerce</li>
              </Link>
              <Link to="/services/api-graphql">
                <li>APIs & GraphQL</li>
              </Link>
              <Link to="/services/jamstack-gatsby">
                <li>JAMStack & Gatsby</li>
              </Link>
              <Link to="/services/magneto">
                <li>Magneto</li>
              </Link>
            </ul>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default MainMobilemenu1;
