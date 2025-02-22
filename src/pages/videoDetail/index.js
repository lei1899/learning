import { useParams, useNavigate } from "react-router-dom";
import { Container, TitleSection, BlanksContainer, ContentRow, NavigationButton } from "./style";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState } from 'react';
import { RichtextContent } from "../../components/common/richtextContent/richtextContent.style";
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import FillInTheBlankComponent from "../../components/contents/fillInTheBlankComponent";
import ComparisonComponent, { getComparisonText, getInitText } from "../../components/contents/comparisonComponent";
import { handleSubmitAndSendEmail } from "../../emailSender/emailSubmitHandler";
import QuizComponent from "../../components/contents/quizComponent";

function VideoDetailPage() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [showComparison, setShowComparison] = useState(false); // 控制是否显示对比结果
    const [showChoices, setShowChoices] = useState(false); // 控制是否显示选择题
    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        FetchEntry(id).then(data => setNewsDetailData(data));
    }, [id]);

    if (!newsDetailData) {
        return <></>;
    }
    console.log(newsDetailData);
    const prevId = getNestedObjectValue(newsDetailData, 'prev');
    const nextId = getNestedObjectValue(newsDetailData, 'next');
    const videoUrl = getNestedObjectValue(newsDetailData, 'video.fields.file.url');
    const blanks = getNestedObjectValue(newsDetailData, 'blanks');
    const quiz = getNestedObjectValue(newsDetailData, 'quiz');

    const handleSubmit = () => {
        handleSubmitAndSendEmail(null, getComparisonText({ blanks, inputValues }), 'template_listen_submit');
        setShowComparison(true);
    };

    const handleConfirmComparison = () => {
        setShowChoices(true);
    };

    const handleNavigation = (targetId) => {
        if (targetId) {
            navigate(`/video/${targetId}`);
        }
    };

    return (
        <Container>
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            <div>
                <video 
                    src={videoUrl}
                    controls
                    preload="auto"
                    width="100%"
                    controlsList="nodownload"
                ></video>
            </div>
            <ContentRow>
                <NavigationButton 
                    onClick={() => handleNavigation(prevId)}
                    disabled={!prevId}
                >
                    prev
                </NavigationButton>
                <BlanksContainer>
                    {!showComparison && !showChoices && (
                        <FillInTheBlankComponent
                            blankString={blanks}
                            handleSubmit={handleSubmit}
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                        />
                    )}
                    {showComparison && !showChoices && (
                        <ComparisonComponent 
                            blankString={blanks}
                            inputValues={inputValues}
                            handleConfirmComparison={handleConfirmComparison}
                        />
                    )}
                    {showChoices && (
                        quiz ? (
                            <div>
                                {getInitText({blanks})}
                                <QuizComponent questions={quiz} />
                            </div>
                        ) : (
                            "Congratulations! You're done!"
                        )
                    )}
                </BlanksContainer>
                <NavigationButton 
                    onClick={() => handleNavigation(nextId)}
                    disabled={!nextId}
                >
                    next
                </NavigationButton>
            </ContentRow>
            <RichtextContent>{documentToReactComponents(newsDetailData.keywords)}</RichtextContent>
            <Footer />
        </Container>
    );
}

export default VideoDetailPage;