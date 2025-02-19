import { useParams } from "react-router-dom";
import { Container, TitleSection, BlanksContainer } from "./style";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FetchNewsDetailEntry from "../../api/newsDetail";
import { useEffect, useState } from 'react';
import { RichtextContent } from "../../components/common/richtextContent/richtextContent.style";
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import AudioPlayer from "../../components/contents/audioPlayerComponent";
import FillInTheBlankComponent from "../../components/contents/fillInTheBlankComponent";
import ComparisonComponent, { getComparisonText } from "../../components/contents/comparisonComponent";
import { handleSubmitAndSendEmail } from "../../emailSender/emailSubmitHandler";

function ListenDetailPage() {
    let { detailId } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [showComparison, setShowComparison] = useState(false); // 控制是否显示对比结果
    const [showChoices, setShowChoices] = useState(false); // 控制是否显示选择题
    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        FetchNewsDetailEntry(detailId).then(data => setNewsDetailData(data));
    }, [detailId]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'audio.fields.file.url');
    const blanksArray = getNestedObjectValue(newsDetailData, 'blankAndAnswer');

    const handleSubmit = () => {
        handleSubmitAndSendEmail(null, getComparisonText({ blanksArray, inputValues }), 'template_listen_submit');
        setShowComparison(true);
    };

    const handleConfirmComparison = () => {
        setShowChoices(true);
    };

    return (
        <Container>
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            <div>
                <img alt="" width={400} src={getNestedObjectValue(newsDetailData, 'image.fields.file.url')} />
            </div>
            <div>
                <AudioPlayer src={audioUrl}></AudioPlayer>
            </div>
            <BlanksContainer>
                {!showComparison && !showChoices && (
                    <FillInTheBlankComponent
                        blanksArray={blanksArray}
                        handleSubmit={handleSubmit}
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                    />
                )}
                {showComparison && !showChoices && (
                    <ComparisonComponent 
                        blanksArray={blanksArray}
                        inputValues={inputValues}
                        handleConfirmComparison={handleConfirmComparison}
                    />
                )}
                {showChoices && (
                    <div>
                        <p>Email is sent.</p>
                    </div>
                )}
            </BlanksContainer>
            <RichtextContent>{documentToReactComponents(newsDetailData.keywords)}</RichtextContent>
            <Footer />
        </Container>
    );
}

export default ListenDetailPage;