import styled from "styled-components";
import QuoteCard from "../../components/common/quoteCard/quoteCard.style";
import { PageContainer } from "../../components/common/pageContainer/pageContainer.style";

export const Container = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center; // 让子元素在交叉轴（垂直方向）上居中
  justify-content: center; // 让子元素在主轴（水平方向）上居中
`;

export const TitleSection = styled(QuoteCard)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 100px;
  @media screen and (max-width: 769px) {
    margin-bottom: 0;
  }
  h1 {
    margin-bottom: 1rem;
  }
  h4 {
    padding-left: 1rem;
  }
  img {
    transform: translateY(100px);
    object-fit: cover;
    max-width: 90%;
    max-height: 400px;
    overflow: hidden;
  }
`;

export const StyledImage = styled.img`
    width: 400px;
`;

export const BlanksContainer = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    font-size: 20px;
    line-height: 2;
    span {
      display: inline;
    }

    input {
      display: inline;
    }

    button {
      font-size: 20px;
      display: block;
      margin: 30px auto 0;
      padding: 10px;
    }
`;

export const Highlight = styled.span`
  background-color: yellow;
`;