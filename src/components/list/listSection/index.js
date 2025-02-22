import {
    Container,
    HeaderRow,
    NewsContainer,
    NewsRow,
    ReadMoreButton,
    SectionTitle,
    SeeMoreButton,
} from "./style";
import validate from "../../../common_check/checkList";
import getNestedObjectValue from "../../../common_check/getValue";

const routes = [
    { key: 'listenFillAnswer', value: 'listen' },
    { key: 'readQuestionsWrite', value: 'read' },
    { key: 'listenReadQuiz', value: 'write' },
    { key: 'videoFillQuiz', value: 'video' },
];

const detailRoute = (route) => {
    const foundRoute = routes.find(r => r.key === route);
    return foundRoute ? foundRoute.value : 'read';
};

function _createNewsRow(data) {
    const type = getNestedObjectValue(data, 'sys.contentType.sys.id');
    return (
        <NewsRow key={data.sys.id}>
            <div>
                <h4>{new Date(data.sys.createdAt).toDateString()}</h4>
                <p>{data.fields.title}</p>
            </div>
            <ReadMoreButton to={`/${detailRoute(type)}/${data.sys.id}`}>Read more<span/></ReadMoreButton>
        </NewsRow>
    );
}

function ListSection ({data}) {
    if (data.length === 0) {
        return <></>;
    }
    return (
        <Container>
            <HeaderRow>
                <SectionTitle>{data.title}</SectionTitle>
                <SeeMoreButton>More</SeeMoreButton>
            </HeaderRow>
            <NewsContainer>
                {data.map((e) => _createNewsRow(e))}
            </NewsContainer>
        </Container>
    );
}

export default ListSection;