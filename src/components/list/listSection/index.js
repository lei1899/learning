import {
    Container,
    NewsContainer,
    NewsRow,
    ReadMoreButton,
} from "./style";
import getNestedObjectValue from "../../../common_check/getValue";

const routes = [
    { key: 'listenFillAnswer', value: 'listen' },
    { key: 'readQuestionsWrite', value: 'read' },
    { key: 'listenReadQuiz', value: 'write' },
    { key: 'videoFillQuiz', value: 'video' },
    { key: 'wordLearn', value: 'word' },
    { key: 'grammarAnswerInParts', value: 'grammarFill' },
    { key: 'listenSummary', value: 'summary' },
];

const detailRoute = (route) => {
    const foundRoute = routes.find(r => r.key === route);
    return foundRoute ? foundRoute.value : 'read';
};

function _createNewsRow(data) {
    const type = getNestedObjectValue(data, 'sys.contentType.sys.id');
    return (
        <NewsRow 
            key={data.sys.id} 
            to={`/${detailRoute(type)}/${data.sys.id}`}
            as={ReadMoreButton}
        >
            <div>
                <h4>{new Date(data.sys.createdAt).toDateString()}</h4>
                <p>{data.fields.title}</p>
            </div>
        </NewsRow>
    );
}

function ListSection ({data}) {
    if (data.length === 0) {
        return <></>;
    }
    return (
        <Container>
            <NewsContainer>
                {data.map((e) => _createNewsRow(e))}
            </NewsContainer>
        </Container>
    );
}

export default ListSection;