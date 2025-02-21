import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding-top: 5rem;
    padding-bottom: 5rem;
    img {
        padding-left: 6rem;
        max-height:345px;
        object-fit: contain;
        transform-origin: 0 0;
        object-position: top left;
    }

    @media screen and (max-width:1050px) {
        flex-direction: column-reverse;
        padding-top: 2rem;
        padding-bottom: 2rem;
        img {
            padding-left: 0;
            padding-bottom: 2rem;
        }
    }
`