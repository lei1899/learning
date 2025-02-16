import { useParams } from "react-router-dom";
import { Container, TitleSection, BlanksContainer, Highlight } from "./newsDetailPage.style";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FetchNewsDetailEntry from "../../api/newsDetail";
import { useEffect, useState } from 'react';
import { RichtextContent } from "../../components/common/richtextContent/richtextContent.style";
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";
import FillInTheBlankComponent from "../../components/contents/fillInTheBlankComponent";

function NewsDetailPage() {
    let { newsId } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [userAnswer, setUserAnswer] = useState(''); // 存储用户输入的答案
    const [showComparison, setShowComparison] = useState(false); // 控制是否显示对比结果
    const [showChoices, setShowChoices] = useState(false); // 控制是否显示选择题
    const [selectedChoice, setSelectedChoice] = useState(null); // 存储用户选择的选项
    const [inputValues, setInputValues] = useState([]);

    useEffect(() => {
        FetchNewsDetailEntry(newsId).then(data => setNewsDetailData(data));
    }, [newsId]);

    if (!newsDetailData) {
        return <></>;
    }

    const audioUrl = getNestedObjectValue(newsDetailData, 'audio.fields.file.url');
    const originalText = getNestedObjectValue(newsDetailData, 'listenAnswer'); // 原文内容在 keywords 字段

    // 处理用户提交答案
    const handleSubmit = () => {
        const blanks = getNestedObjectValue(newsDetailData, 'fillInTheBlank');
        if (blanks) {
            let answer = '';
            let blankIndex = 0;
            blanks.split(/(_+)/).forEach(part => {
                if (part.match(/_+/)) {
                    answer += inputValues[blankIndex] || '';
                    blankIndex++;
                } else {
                    answer += part;
                }
            });
            setUserAnswer(answer);
        }
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

    const handleInputChange = (index) => (e) => {
        const newValues = [...inputValues];
        newValues[index] = e.target.value;
        setInputValues(newValues);
    };

    return (
        <Container>
            <TitleSection>
                <h1>{newsDetailData.title}</h1>
            </TitleSection>
            <div>
                <img alt="" width={400} src={getNestedObjectValue(newsDetailData, 'image.fields.file.url')} />
            </div>
            <div>
                <audio src={audioUrl} controls></audio>
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
            {/* 第二步：对比答案 */}
            {showComparison && !showChoices && (
                <div>
                    <p>用户输入：
                    {(() => {
                            const blanks = getNestedObjectValue(newsDetailData, 'fillInTheBlank');
                            if (blanks) {
                                const parts = [];
                                let blankIndex = 0;
                                blanks.split(/(_+)/).forEach(part => {
                                    if (part.match(/_+/)) {
                                        parts.push(<Highlight key={blankIndex}>{inputValues[blankIndex] || ''}</Highlight>);
                                        blankIndex++;
                                    } else {
                                        parts.push(<span key={parts.length}>{part}</span>);
                                    }
                                });
                                return parts;
                            }
                            return userAnswer;
                        })()}
                    </p>
                    <p>原文：
                    {(() => {
                            const blanks = getNestedObjectValue(newsDetailData, 'fillInTheBlank');
                            if (blanks) {
                                const parts = [];
                                let blankIndex = 0;
                                let originalTextParts = originalText.split(new RegExp(blanks.replace(/_+/g, '(.*?)')));
                                originalTextParts.forEach((part, index) => {
                                    if (index % 2 === 1) {
                                        parts.push(<Highlight key={blankIndex}>{part}</Highlight>);
                                        blankIndex++;
                                    } else {
                                        parts.push(<span key={parts.length}>{part}</span>);
                                    }
                                });
                                return parts;
                            }
                            return originalText;
                        })()}
                    </p>
                    <button onClick={handleConfirmComparison}>确认</button>
                </div>
            )}
            {/* 第三步：选择题 */}
            {showChoices && (
                <div>
                    <p>请选择正确的内容：</p>
                    <button onClick={() => handleChoiceSelect(originalText)}>{originalText}</button>
                    {/* 这里可以添加更多选项，根据实际需求 */}
                    {selectedChoice && <p>正确答案：{originalText}</p>}
                </div>
            )}
            </BlanksContainer>
            <RichtextContent>{documentToReactComponents(newsDetailData.keywords)}</RichtextContent>
            <Footer />
        </Container>
    );
}

export default NewsDetailPage;