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
import ComparisonComponent from "../../components/contents/comparisonComponent";
import { handleSubmitAndSendEmail } from "../../emailSender/emailSubmitHandler";

function ListenDetailPage() {
    let { detailId } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [showComparison, setShowComparison] = useState(false); // 控制是否显示对比结果
    const [showChoices, setShowChoices] = useState(false); // 控制是否显示选择题
    const [selectedChoice, setSelectedChoice] = useState(null); // 存储用户选择的选项
    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        FetchNewsDetailEntry(detailId).then(data => setNewsDetailData(data));
    }, [detailId]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'audio.fields.file.url');
    const originalText = getNestedObjectValue(newsDetailData, 'listenAnswer'); // 原文内容在 keywords 字段

    // 处理用户提交答案
    const handleSubmit = () => {
        handleSubmitAndSendEmail(null, 'testsa');
        setShowComparison(true);
    };

    // 处理用户确认对比结果
    const handleConfirmComparison = () => {
        setShowChoices(true);
    };

    // 处理用户选择选项
    const handleChoiceSelect = (choice) => {
        setSelectedChoice(choice);
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
                        blanksArray={getNestedObjectValue(newsDetailData, 'blankAndAnswer')}
                        handleSubmit={handleSubmit}
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                    />
                )}
                {showComparison && !showChoices && (
                    <ComparisonComponent 
                        blanksArray={getNestedObjectValue(newsDetailData, 'blankAndAnswer')}
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