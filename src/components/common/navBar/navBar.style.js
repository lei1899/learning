import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
     position:fixed;
     top:0;
     left:0;
     width:100%;
     background-color:#f6f6f7;
     padding: 0rem 2rem;
     z-index: 1000;
`

export const DesktopNavBar = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    height:100px;
    width: 100%;
`

export const Logo = styled.img`
    width: 190px;
    height:50px;
    cursor: pointer;
    @media screen and (max-width:769px) {
        width: 130px;
        height:40px;
    }
`

export const DesktopMenu = styled.ul`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    margin-right: 50px;
    list-style:none;
`

export const DesktopMenuItem = styled(Link)`
    padding: 0 1.1rem;
    text-decoration: none;
    line-height: 2.4rem;
    height: 2.4rem;
    text-align:center;
    color: #192e44;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.2s ease;
    &:hover {
        color: #82c341;
    }

    &~&:last-child {
        background-color: #82c341;
        /* color:white; */
        border-radius:0.3rem;
        &:hover {
            color: #192e44;
        }
    }

    @media screen and (max-width:1050px) {
        font-size: 0.8rem;
    }

`
export const MobileNavBar = styled.div`
    display: none;
    justify-content: space-between;

    align-items: center;
    height: ${props => props.extendNavBar ? "100vh" : "70px"};
    @media screen and (max-width:769px) {
        display: flex;
    }
`

export const MobileOpenMenuButton = styled.div`
    position: absolute;
    height: 60px;
    width: 60px;
    top: 0rem;
    right: 1rem;
    z-index: 1000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    .line-1,.line-2,.line-3 {
        position: absolute;
        left: 25%;
        top: 50%;
        width: 28px;
        height: 3px;
        background-color: black;
        transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
    }

    .line-1 {
        transform: translateY(-8px);
        animation-delay: 100ms;
        transform: ${(props) => (props.open ? "rotate(40deg)" : null) };
    }
    .line-2 {
        opacity: ${(props) => props.open ? 0 : 1}
    }
    .line-3 {
        transform: translateY(8px);
        animation-delay: 250ms;
        transform: ${props => (props.open ? "rotate(-40deg)" : null) };
    }
`

export const MobileMenu = styled.div`
    width:100vw;
    height: 100vh;;
    position:absolute;
    left:0;
    top:70px;
    background-color:#f6f6f7;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    padding: 0 2rem;
    transition: all 0.2s ease-in;
`

export const MobileMenuItem = styled(Link)`
    padding: 0 1.1rem;
    text-decoration: none;
    line-height: 2.4rem;
    height: 2.6rem;
    padding-bottom:1rem;
    text-align:center;
    color: #192e44;
    font-size: 1.2rem;
    font-weight: 500;
    /* transition: 0.2s ease; */
    display:flex;
    justify-content: space-between;
    &::after {
        content: url("https://www.elementfleet.com/webfiles/1723594689501/icons/arrow-right-dark.png");
        /* display:inline-block; */
    }
`

export const UserName = styled.div`
    margin-left: auto;
    padding: 10px;
    color: #333;
    font-size: 14px;
`;

export const LogoutButton = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
        background-color: #e0e0e0;
    }
`;