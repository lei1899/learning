import {
    Container,
    HeaderRow,
    NewsContainer,
    NewsRow,
    ReadMoreButton,
    SectionTitle,
    SeeMoreButton,
} from "./newSection.style";
import validate from "../../../common_check/checkList";

function _createNewsRow(data, detailRoute) {
    return (
        <NewsRow key={data.sys.id}>
            <div>
                <h4>{new Date(data.sys.createdAt).toDateString()}</h4>
                <p>{data.fields.title}</p>
            </div>
            <ReadMoreButton to={`/${detailRoute}/${data.sys.id}`}>Read more<span/></ReadMoreButton>
        </NewsRow>
    );
}

function NewsSection ({data, detailRoute}) {
    const news_list_maximum = 4;
    const ok = validate(data, news_list_maximum);
    if (!ok) {
        return <></>;
    }

    return (
        <Container>
            <HeaderRow>
                <SectionTitle>{data.title}</SectionTitle>
                <SeeMoreButton>More</SeeMoreButton>
            </HeaderRow>
            <NewsContainer>
                {data.list.map((e) => _createNewsRow(e, detailRoute))}
            </NewsContainer>
        </Container>
    );
}

export default NewsSection;