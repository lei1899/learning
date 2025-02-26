import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 4rem;
    @media screen and (max-width:769px) {
        padding: 2rem 2rem;
    }
`

export const HeaderRow = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    padding: 1rem 0;
    @media screen and (max-width:1025px) {
        flex-wrap:wrap;
    }
`
export const SectionTitle = styled.p`
    font-size:3rem;
    font-weight:800;
    margin-bottom: 1rem;
    color: #192e44;
    @media screen and (max-width:769px) {
        font-size:2.5rem;
    }
`

export const SeeMoreButton = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #192e44;
    cursor:pointer;
    &::after {
        content: url("https://www.elementfleet.com/webfiles/1723594689501/icons/arrow-right.png");
        padding-left:0.5rem;
    }
`

export const NewsContainer = styled.ul`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;

`
export const NewsRow = styled.li`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;
    padding: 2rem;
    background-color: white;
    margin-bottom:1rem;
    &:hover {
        background-color: #82c341;
    }

    div {
        display:flex;
        flex-direction:row;
        h4 {
            color:#646E7B;
            font-weight:500;
            padding-right:2rem;
        }
        p {
            max-width: 800px;
        }

    }
    @media screen and (max-width:1025px) {
        div {
            flex-direction:column;
        }
    }

    @media screen and (max-width:769px) {
        flex-direction:column;
        align-items:start;
        &:hover {
        background-color: white;
    }
        a {
            margin-left:0;
            padding:0.5rem;
            border:none;
        }
    }

`

export const ReadMoreButton = styled(Link)`
    display:flex;
    justify-content:flex-start;
    align-items: center;
    margin:1rem;
    padding:1rem;
    font-weight:500;
    white-space:nowrap;
    text-decoration:none;
    background-color: white;
    color:black;
    border-radius:0.5rem;
    border: 2px solid #82c341;
    &:active {
        color:black;
    }
    span {
        display: inline-block;
        width:20px;
        height:16px;
        margin-left:1rem;
    }
`