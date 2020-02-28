import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import FeatureBlock from 'common/src/components/FeatureBlock';
import logo_black from 'common/src/assets/image/hosting/logo.png';
import b2bbanner_image from 'common/src/assets/image/hosting/Banner/B2B.jpg';
import b2cbanner_image from 'common/src/assets/image/hosting/Banner/B2C.jpg';
import aimlbanner_image from 'common/src/assets/image/hosting/Banner/AIML.jpg';
import cloudtransformationbanner_image from 'common/src/assets/image/hosting/Banner/CloudTransformation.jpg';
import headlesscommercebanner_image from 'common/src/assets/image/hosting/Banner/HeadlessCommerce.jpg';
import omnichannelbanner_image from 'common/src/assets/image/hosting/Banner/Omnichannel.jpg';
import socialcommercebanner_image from 'common/src/assets/image/hosting/Banner/SocialCommerce.jpg';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  section {
    position: relative;
  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #eb4d4b;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #eb4d4b;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #eb4d4b;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #eb4d4b;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
  

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${themeGet('colors.primary', '#5268db')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }
  }

  // owncss
  .section_background_color {
    background-color: #f9fbfd;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .hosting_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 0;
    }
    .hosting_navbar .main_menu .main_menu_head {
      color: #000;
    }
    .hosting_navbar .LogoImageSize {
      content: url(${logo_black});
    }
  }
  // hosting navbar own code
  .hosting_navbar .main_menu .main_menu_head {
    color: #fff;
  }
  .hosting_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 5px 0;
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #eb4d4b;
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #343d48;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #eb4d4b;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .info-sec-container {
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    @media (max-width: 768px) and (min-width: 768px) {
      top: 40%;
    }
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .accordion_item {
    border-bottom: 1px solid #ebebeb;
    border-top: 0;
    + .accordion__item {
      border-top: 0;
    }
  }

  .accordion_title {
    padding: 23px 30px;
    @media (max-width: 575px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .accordion_body {
    padding: 0 30px 23px 30px;
  }

  .service_section {
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #f9fbfd 50%,
      #f9fbfd 100%
    );

    .service_col {
      border-width: 1px 0 0 1px;
      border-style: solid;
      border-color: #f1f4f6;
      &:nth-child(3n + 3),
      &:last-child {
        border-right-width: 1px;
      }
      &:nth-last-child(-n + 3) {
        border-bottom-width: 1px;
      }
      .service_item {
        position: relative;
        height: 100%;
        transition: 0.2s ease-in-out;

        &:hover {
          box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
          z-index: 1;
        }

        &:before {
          content: '';
          position: absolute;
          width: 85%;
          height: 0;
          bottom: 0;
          left: 50%;
          display: block;
          pointer-events: 0;
          transform: translateX(-50%);
        }
        &:hover {
          &:before {
            box-shadow: 0px 0px 60px 0px rgba(39, 79, 117, 0.2);
          }
        }

        img {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }
      }
    }
  }

  // our code
  //common css
  .text_center {
    text-align: center;
  }
  .mb_0 {
    margin-bottom: 0;
  }
  .mt_0 {
    margin-top: 0;
  }
  .pt_0 {
    padding-top: 0;
  }
  .pb_0 {
    padding-bottom: 0;
  }
  .flex_center {
    justify-content: center;
  }
  .padding_bottom_5 {
    padding-bottom: 5px;
    margin-bottom: 0;
  }
  .list_style_disc {
    margin-left: 30px;
    & li {
      list-style-type: disc;
      color: #343d48cc;
      padding-bottom: 10px;
    }
  }
  // banner
  #banner_section:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #052f4aab;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .banner_container {
    // position: relative;
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
  }
  #banner_section h2,
  #banner_section p {
    color: #fff;
  }
  .container.banner_container,
  #OurTeam .BoxItemsContainer {
    display: none;
  }
  //Banner other pages visibility
  // button style
  .reusecore__button {
    padding: 10px 20px;
    min-height: auto;
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    .btn-text {
      color: #fff;
      font-size: 16px;
      padding: 0;
      z-index: 3;
    }
  }
  .reusecore__button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    transition: all 0.4s ease-out;
  }
  .reusecore__button:hover:after {
    transform: scaleY(1);
    z-index: 1;
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    background-color: #73c2c2;
  }
  //ul box layout
  .info_container_list_items   {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  .info_container_list_items li {
      width: 46%;
      margin: 10px;
      padding: 10px;
      color: #343d48cc;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 35px;
      border-radius: 8px;
    }
    .info_container_list_items li:hover {
      box-shadow: rgba(39,79,117,0.2) 0 40px 90px -30px;
    }
    @media only screen and (max-width: 575px) {
      .info_container_list_items {
        display: block;
        li {
          width: 100%;
        }
      }
    }
  // Pages setting
  &.Home_page {
    // .hosting_navbar {
    //   background-color: rgba(255, 255, 255, 0.95);
    //   .main_menu .main_menu_head {
    //     color: #000;
    //   }
    // }
  }

  &.aboutUs_page {
    .container.banner_container.aboutUs_banner {
      display: block;
    }
  }
  &.ContantUs_page {
    .container.banner_container.ContactUs_banner {
      display: block;
    }
  }
  &.company_page {
    .container.banner_container.company_banner {
      display: block;
    }
  }
  &.ourTeam_page {
    .container.banner_container.ourTeam_banner,
    #OurTeam .BoxItemsContainer.ourTeamPage_content {
      display: block;
    }
  }
  &.Partners_page {
    .container.banner_container.Partner_banner,
    #OurTeam .BoxItemsContainer.ourPartnerPage_content,
    #OurTeam .BoxItemsContainer.ourCustomerPage_content {
      display: block;
    }
  }
  &.B2c_page {
    .container.banner_container.B2c_banner{
      display: block;
    }
    #banner_section {
      background-image: url(${b2bbanner_image});
    } 
  }
  &.B2b_page {
    .container.banner_container.B2b_banner{
      display: block;
    }
    #banner_section {
      background-image: url(${b2cbanner_image});
    } 
  }
  &.Automation_ai_page {
    .container.banner_container.automation_ai_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${aimlbanner_image});
    } 
  }
  &.Cloud_infrastructure_page {
    .container.banner_container.Cloud_infrastructure_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${cloudtransformationbanner_image});
    } 
  }
  &.Omnichannel_page {
    .container.banner_container.omnichannel_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${omnichannelbanner_image});
    } 
  }
  &.Headless_commerce_page {
    .container.banner_container.headless_commerce_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${headlesscommercebanner_image});
    } 
  }
  &.Social_commerce_page {
    .container.banner_container.social_commerce_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${socialcommercebanner_image});
    } 
  }
  &.Order_Management_page {
    .container.banner_container.order_management_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${socialcommercebanner_image});
    } 
  }
  &.Digital_experience_page {
    .container.banner_container.digital_experience_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${socialcommercebanner_image});
    } 
  }
  &.Technology_page {
    .container.banner_container.technology_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${socialcommercebanner_image});
    } 
  }
  &.IOT_blockchain_page {
    .container.banner_container.iot_blockchain_banner {
      display: block;
    }
    #banner_section {
      background-image: url(${socialcommercebanner_image});
    } 
  }

  @media (max-width: 990px) {
    .glide__slide--active .pricing_table {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      border: 0;
    }
  }
`;

export const FeatureItem = styled(FeatureBlock)`
  position: relative;
  padding: 50px 30px;
  border: 1px solid #f2f4f7;
  border-radius: 5px;
  background-color: #fff;
  transition: 0.35s ease-in-out;
  @media (max-width: 768px) and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media (max-width: 575px) {
    padding: 40px 25px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      138deg,
      rgb(249, 212, 35) 0%,
      rgb(255, 78, 80) 100%
    );
    transition: 0.35s ease-in-out;
  }

  & > div {
    position: relative;
  }

  h2,
  p {
    transition: 0.35s ease-in-out;
  }

  .hover-shape {
    width: 20px;
    height: auto;
    position: absolute;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(260deg);
  }

  .hover-shape-1 {
    left: 0;
    top: 20px;
  }

  .hover-shape-2 {
    right: 29%;
    top: 0;
  }

  .hover-shape-3 {
    right: 0;
    bottom: 35%;
  }

  .hover-shape-4 {
    right: 30%;
    bottom: 0;
  }

  .hover-shape-5 {
    left: 0;
    bottom: 30%;
  }
  .icon__wrapper {
    margin-bottom: 40px;
    @media (max-width: 768px) and (min-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 25px;
    }
    i {
      line-height: 1;
      font-size: 65px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 50px;
      }
      &.violate {
        color: #8569ff;
      }
      &.yellow {
        color: #ffb129;
      }
      &.green {
        color: #18d379;
      }
    }
  }

  .button__wrapper {
    a {
      color: #c2cbd6;
      font-size: 24px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 22px;
      }
    }
  }

  &:hover {
    background-color: #eb4d4b;
    &:before {
      opacity: 0.37;
    }

    .hover-shape-1 {
      left: -40px;
      top: 20px;
    }
    .hover-shape-2 {
      right: 29%;
      top: -47px;
    }
    .hover-shape-3 {
      right: -27px;
      bottom: 35%;
    }
    .hover-shape-4 {
      right: 30%;
      bottom: -60px;
    }
    .hover-shape-5 {
      left: -35px;
      bottom: 30%;
    }
    .hover-shape {
      transform: rotate(0);
      opacity: 1;
    }
    h2,
    p {
      color: #fff;
    }

    .icon__wrapper {
      i {
        color: #fff;
      }
    }

    .button__wrapper {
      a {
        color: #fff;
      }
    }
  }
  //own code for features icon text
  &.feature_sectionItem_container:hover {
    .hover-shape-1 {
      left: -25px;
      top: 20px;
    }
    .hover-shape-2 {
      right: 29%;
      top: -30px;
    }
    .hover-shape-3 {
      right: -27px;
      bottom: 35%;
    }
    .hover-shape-4 {
      right: 30%;
      bottom: -20px;
    }
    .hover-shape-5 {
      left: -26px;
      bottom: 30%;
    }
  }
  //own code for features icon text
`;