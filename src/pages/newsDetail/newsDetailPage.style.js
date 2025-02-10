import styled from "styled-components";
import QuoteCard from "../../components/common/quoteCard/quoteCard.style";
import { PageContainer } from "../../components/common/pageContainer/pageContainer.style";

export const Container = styled(PageContainer)`
`

export const TitleSection = styled(QuoteCard)`
    display:flex;
    flex-direction:column;
    align-items: stretch;
    margin-bottom:100px;
    @media screen and (max-width:769px) {
        margin-bottom:0;
    }
    h1 {
        margin-bottom:1rem;
    }
    h4 {
        padding-left:1rem;
    }
    img {
        transform: translateY(100px);
        object-fit: cover;
        max-width: 90%;
        max-height: 400px;
        overflow:hidden;
    }
`
