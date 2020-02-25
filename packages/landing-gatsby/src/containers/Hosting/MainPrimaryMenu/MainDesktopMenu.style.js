import styled from 'styled-components';

const MainDesktopNav = styled.nav`
    ul, li {
        // padding: 0;
    }
`;

export const MainNavbarUl = styled.ul`
// padding-top: 210px;
`;

export const MainNavbarDropUl = styled.ul`
    width: 45%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    &.Desktop_Menu_stepped {
        justify-content: center;
        flex-direction: row;
        width: 100%;
        li {
            img {
                width: 100%;
                max-width: 90px;
                object-fit: contain;
            }
            span {
                width: 100%;
                // text-align: center;
                // min-width: 110px;
            }
            display: flex !important;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 33%;
            margin: 0 15px;
        }
    }
    &.Desktop_Menu_stepped2 {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        padding: 0;
        li {
            img {
                width: 100%;
                max-width: 30px;
                object-fit: contain;
                margin-right: 25px;
            }
            span {
                width: 100%;
                // text-align: center;
                // min-width: 110px;
            }
            display: flex !important;
            flex-direction: row;
            align-items: center;
            justify-content: left;
            width: 100%;
            margin: 0;
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
            padding: 10px !important;
        }
        li:last-child {
            border-bottom: none;
        }
        li:hover {
            background-color: #f9fbfd;
        }
    }
`;

export const MainNavbarDropLi = styled.li`
    padding: 5px 0 !important;
    a {
        padding: 0 !important;
    }
    span {
        position: relative;
        width: 0;
    }
    span::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        // min-width: 0;
        height: 3px;
        background-color: #1B24C1;
        transition: all 0.4s ease-in-out;
        transform: none;
        margin-top: 0;
    }
    &:hover span::after {
        width: 100%;
        // min-width: 120px;
    }
`;
export const MainNavbarDropMainLi = styled.li`
    font-weight: bold;
`;

export const MainNavbarDropBox = styled.div`
    position: absolute;
    // top: 79px;
    left: 0;
    right: 0;
    width: 85%;
    max-width: 1170px;
    margin: 0 auto;
    transition: top 0.4s ease-in-out;
    
    &.Desktop_Menu_sized {
        width: 60%;
        left: auto;
        right: 10%;
    }
    &.Menu_desktop_set {
        width: 270px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1240px) {
        width: 100%;
        &.featured_Menu {

        }
    }
`;
export const MainNavFlexbox = styled.div`
    display: flex !important;
    background: rgba(255,255,255,1);
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 2px solid #1B24C1;

    .featured_Menu {
        background-color: #f9fbfd;
        margin-top: -14px;
        margin-bottom: -15px;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
        width: 100%;
        position: relative;
    }
    .featured_Menu_container {
        position: static; 
        top: 0;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        padding: 15px;
    }
    .featured_Menu_container .featured_Menu_col {
        width: 49%;
    }
    .featured_Menu_container .featured_Menu_col img{
        max-width: 100%;
    }
    .featured_Menu_container .featured_Menu_col2 img{
        position: absolute;
        max-height: 100%;
        max-width: 150px;
        top: 50%;
        transform: translateY(-50%);
        right: 10%;
    }
    .featured_Menu_container .btn-cta-menu {
        cursor: pointer;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #ffffff;
        min-height: 46px;
        min-width: 48px;
        border-radius: 3px;
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-transform: capitalize;
        padding-top: 8px;
        padding-bottom: 8px;
        border: 0;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #ffffff;
        background-color: #4a90e2;
        border-color: #4a90e2;
        box-sizing: border-box;
        padding-left: 22px;
        padding-right: 22px;
        font-size: 14px;
        color: #fff;
        border-radius: 4px;
        margin-top: 15px;
        position: absolute;
        bottom: 20px;
    }
    &.Menu_desktop_box {
        padding: 0;
    }
    &.Desktop_menu_shadow {
        // box-shadow: 0 4px 15px #4a90e2;
        box-shadow: rgb(74, 144, 226) 0 10px 20px -15px;
    }
`;

export const MainNavbarLi = styled.li`
    padding: 30px 15px;
    .desktop_menu_drop_effect {
        opacity: 0;
        visibility: hidden;
        z-index: -999;
        top: 75px;
    }
    &:hover .desktop_menu_drop_effect {
        opacity: 1;
        top: 79px;
        visibility: visible;
        z-index: 1;
    }
    span {
        cursor: pointer;
    }
    &.Menu_position_rel {
        position: relative;
    }
    .desk_arrow_down {
        color: #eb4d4b;;
        font-size: 10px;
        vertical-align: middle;
    }
`;

export default MainDesktopNav;