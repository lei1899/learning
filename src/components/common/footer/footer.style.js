import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    margin: 0 4rem;
    padding-top:1rem;
    padding-bottom:2rem;
    border-top:1px solid #d8dce8;

    p {
        color: #646E7B;
        font-weight:500;
        font-size:0.8rem;
    }

    div {
        a {
            text-decoration:none;
            color: #646E7B;
            padding-right:1rem;
            font-size:0.8rem;
            line-height: 1.4rem;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
            /* &~&:last-child {
                padding-right:0;
            } */
        }
    }

    @media screen and (max-width:769px) {
        margin: 0 2rem;
    }
`