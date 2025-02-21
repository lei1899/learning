import { useParams } from "react-router-dom";
import { Container, TitleSection, BlanksContainer } from "./style";
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState } from 'react';
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import PdfReader from "../../components/contents/pdfReaderComponent";
import { handleSubmitAndSendEmail } from "../../emailSender/emailSubmitHandler";
import { StyledTextarea } from "./style";

function ReadDetailPage() {
    let { id } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [showWriteWords, setShowWriteWords] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        FetchEntry(id).then(data => setNewsDetailData(data));
    }, [id]);

    if (!newsDetailData) {
        return <></>;
    }

    const pdfUrl = getNestedObjectValue(newsDetailData, 'pdf.fields.file.url');

    // 处理用户提交答案
    const handleSubmit = () => {
        handleSubmitAndSendEmail(null, inputValue, 'template_write_submit');
        setShowWriteWords(false);
        setShowResult(true);
    };

    return (
        <Container>
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            <div>
                <PdfReader src={pdfUrl}></PdfReader>
            </div>
            <BlanksContainer>
                {showWriteWords && (
                    <div>
                    <p>1. Can you write one or two sentences to describe what this page is about?</p>
                    <StyledTextarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        rows={4}
                        cols={100}
                    />
                    <button onClick={handleSubmit}>submit</button>
                    </div>
                )}
                {showResult && (
                    <div>
                        <p>Email is sent.</p>
                    </div>
                )}
            </BlanksContainer>
            <Footer />
        </Container>
    );
}

export default ReadDetailPage;