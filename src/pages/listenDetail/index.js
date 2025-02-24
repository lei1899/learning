import { useParams } from "react-router-dom";
import { Container, TitleSection, BlanksContainer } from "./style";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState } from 'react';
import { RichtextContent } from "../../components/common/richtextContent/richtextContent.style";
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import AudioPlayer from "../../components/contents/audioPlayerComponent";
import FillInTheBlankComponent from "../../components/contents/fillInTheBlankComponent";
import ComparisonComponent, { getComparisonText, getBoldText } from "../../components/contents/comparisonComponent";
import { handleSubmitAndSendEmail } from "../../emailSender/emailSubmitHandler";
import QuizComponent from "../../components/contents/quizComponent";

function ListenDetailPage() {
    let { id } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [showComparison, setShowComparison] = useState(false);
    const [showChoices, setShowChoices] = useState(false); 
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        FetchEntry(id).then(data => setNewsDetailData(data));
    }, [id]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'sentence.fields.audio.fields.file.url');
    const blanks = getNestedObjectValue(newsDetailData, 'blankPart');
    const quiz = getNestedObjectValue(newsDetailData, 'quiz');

    const handleSubmit = () => {
        handleSubmitAndSendEmail(null, getComparisonText({ blankString:blanks, inputValues }), 'template_listen_submit');
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
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '1rem'
            }}>
                <button onClick={() => setShowChoices(true)}>Skip Dictation</button>
                <AudioPlayer src={audioUrl}></AudioPlayer>
            </div>
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
                    <>
                        {quiz && !quizCompleted && (
                            <div>
                                {getBoldText({blankString:blanks})}
                                <QuizComponent 
                                    questions={quiz} 
                                    onQuizComplete={() => setQuizCompleted(true)}
                                />
                            </div>
                        )}
                        {(!quiz || quizCompleted) && (
                            <div>
                                <h2>Congratulations!</h2>
                                <p>You're done!</p>
                            </div>
                        )}
                    </>
                )}
            </BlanksContainer>
            <RichtextContent>{documentToReactComponents(newsDetailData.keywords)}</RichtextContent>
            <Footer />
        </Container>
    );
}

export default ListenDetailPage;