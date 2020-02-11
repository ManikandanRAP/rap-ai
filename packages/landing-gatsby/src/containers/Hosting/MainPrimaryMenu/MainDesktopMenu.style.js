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
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
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
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
`;
export const MainNavFlexbox = styled.div`
    display: flex !important;
    background: rgba(255,255,255,1);
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 2px solid #1B24C1;
`;

export const MainNavbarLi = styled.li`
    padding: 30px 15px;
    div {
        opacity: 0;
        visibility: hidden;
        z-index: -999;
        top: 75px;
    }
    &:hover div {
        opacity: 1;
        top: 79px;
        visibility: visible;
        z-index: 1;
    }
`;

export default MainDesktopNav;