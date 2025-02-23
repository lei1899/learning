import { useParams } from "react-router-dom";
import { Container, TitleSection } from "./style";
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState } from 'react';
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import AudioPlayer from "../../components/contents/audioPlayerComponent";
import { renderBoldText } from "../../components/contents/comparisonComponent";

function WordDetailPage() {
    let { id } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);

    useEffect(() => {
        FetchEntry(id).then(data => setNewsDetailData(data));
    }, [id]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'sentenceAudio.fields.file.url');

    return (
        <Container>
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '1rem'
            }}>
                <p>{ renderBoldText({ blankString:newsDetailData.sentence }) }</p>
                <AudioPlayer src={audioUrl}></AudioPlayer>
            </div>
            <Footer />
        </Container>
    );
}

export default WordDetailPage;