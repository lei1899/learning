import { useParams } from "react-router-dom";
import { Container, TitleSection, BlanksContainer, AudioContainer, StageButton } from "./style";
import FetchEntry from "../../api/fetchEntry";
import { useEffect, useState } from 'react';
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import AudioPlayer from "../../components/contents/audioPlayerComponent";
import QuizComponent from "../../components/contents/quizComponent";

function SummaryDetailPage() {
    let { id } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [currentStage, setCurrentStage] = useState('listening');

    useEffect(() => {
        FetchEntry(id).then(data => setNewsDetailData(data));
    }, [id]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'sentence.fields.audio.fields.file.url');
    const quiz = getNestedObjectValue(newsDetailData, 'quiz');
    const initialText = getNestedObjectValue(newsDetailData, 'sentence.fields.sentence');

    if (!quiz || !audioUrl) {
        return <></>;
    }

    return (
        <Container>
            <TitleSection>
                <h4>{newsDetailData.title}</h4>
            </TitleSection>
            
            <AudioContainer>
                <AudioPlayer src={audioUrl} />
            </AudioContainer>

            {currentStage === 'listening' && (
                <StageButton onClick={() => setCurrentStage('quiz')}>
                    Go
                </StageButton>
            )}

            <BlanksContainer>
                {currentStage === 'quiz' && !quizCompleted && (
                    <div>
                        <QuizComponent 
                            questions={quiz} 
                            onQuizComplete={() => {
                                setQuizCompleted(true);
                                setCurrentStage('result');
                            }}
                        />
                    </div>
                )}
                {currentStage === 'result' && (
                    <div>
                        <p>{initialText}</p>
                    </div>
                )}
            </BlanksContainer>
            <Footer />
        </Container>
    );
}

export default SummaryDetailPage;