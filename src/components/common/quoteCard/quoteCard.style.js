import styled from "styled-components";


const QuoteCard = styled.div`
    padding: 2rem 4rem;
    background: linear-gradient(96.92deg, #192e44 1.3%, #a7e8e0 321.41%);
    @media screen and (max-width:769px) {
        padding: 2rem 2rem;
    }
    h1 {
        font-size: 2rem;
        line-height: 2.8rem;
        font-weight: 600;
        margin-bottom: 2.4rem;
        max-width:1200px;
        background: linear-gradient(154.99deg, #a7e8e0 9.21%, #68d692 111.68%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    h4 {
        color:white;
        font-weight:400;
        font-size:1rem;
    }
    p {
        display:flex;
        flex-direction:column;
        color: #95a4b9;
        font-weight:400;
        span {
            color:white;
        }
    }
`

export default QuoteCard;
