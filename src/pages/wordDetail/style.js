import styled from "styled-components";
import QuoteCard from "../../components/common/quoteCard/quoteCard.style";
import { PageContainer } from "../../components/common/pageContainer/pageContainer.style";

export const Container = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center; // 让子元素在交叉轴（垂直方向）上居中
  justify-content: center; // 让子元素在主轴（水平方向）上居中
  width: calc(100% - 40px); // 宽度铺满减去前后 20px 的间距
  margin-left: 20px; // 左边距 20px
  margin-right: 20px; // 右边距 20px
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
`;

export const ContentSection = styled.div`
    text-align: left;
    line-height: 30px;
    font-size: 20px;
    padding-left: 100px;
    padding-right: 100px;
`;