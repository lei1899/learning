import { useParams } from "react-router-dom";
import { Container, TitleSection } from "./style";
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState } from 'react';
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import PdfReader from "../../components/contents/pdfReaderComponent";
import AudioPlayer from "../../components/contents/audioPlayerComponent";

function WriteDetailPage() {
    let { detailId } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);

    useEffect(() => {
        FetchEntry(detailId).then(data => setNewsDetailData(data));
    }, [detailId]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'audio.fields.file.url');
    const pdfUrl = getNestedObjectValue(newsDetailData, 'pdf.fields.file.url');

    return (
        <Container>
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            <AudioPlayer src={audioUrl}></AudioPlayer>
            <PdfReader src={pdfUrl}></PdfReader>
            <Footer />
        </Container>
    );
};

export default WriteDetailPage;