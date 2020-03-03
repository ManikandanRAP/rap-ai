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
    // padding: 0 10px;
    padding: 15px 0;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
    // background-color: #fff;

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
        padding: 0;
        width: 100%;
        li {
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
            padding: 0px !important;
            a {
                display: flex;
                width: 100%;
                align-items: center;
            }
            img {
                width: 100%;
                max-width: 30px;
                object-fit: contain;
                margin: 10px;
                margin-right: 25px;
            }
            
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
    padding: 5px 15px;
    a {
        padding: 0 !important;
        display: block;
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
        // width: 100%;
        // min-width: 120px;
    }
    &:hover {
        background-color: #73c2c238;
    }

`;
export const MainNavbarDropMainLi = styled.li`
    font-weight: bold;
    margin-left: 15px;
`;

export const MainNavbarDropBox = styled.div`
    position: absolute;
    // top: 79px;
    left: 0;
    right: 0;
    width: 85%;
    max-width: 1170px;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;
    
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
    }
`;
export const MainNavFlexbox = styled.div`
    display: flex !important;
    background: rgba(255,255,255,1);
    // background-color: rgba(0,0,0,0.1);
    // padding-top: 15px;
    // padding-bottom: 15px;
    border-top: 2px solid #1B24C1;

    .featured_Menu {
        background-color: #73c2c238;
        // margin-top: -14px;
        // margin-bottom: -15px;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
        width: 100%;
        position: relative;
        border: none;
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
        color: #73c2c2;
        font-size: 10px;
        vertical-align: middle;
    }
`;

export default MainDesktopNav;