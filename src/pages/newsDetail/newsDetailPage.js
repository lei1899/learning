import { useParams } from "react-router-dom";
import { Container, TitleSection, BlanksContainer } from "./newsDetailPage.style";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import FetchNewsDetailEntry from "../../api/newsDetail";
import { useEffect, useState } from 'react';
import { RichtextContent } from "../../components/common/richtextContent/richtextContent.style";
import Footer from "../../components/common/footer/footer";
import getNestedObjectValue from "../../common_check/getValue";

function NewsDetailPage() {
    let { newsId } = useParams();
    const [newsDetailData, setNewsDetailData] = useState(null);
    const [userAnswer, setUserAnswer] = useState(''); // 存储用户输入的答案
    const [showComparison, setShowComparison] = useState(false); // 控制是否显示对比结果
    const [showChoices, setShowChoices] = useState(false); // 控制是否显示选择题
    const [selectedChoice, setSelectedChoice] = useState(null); // 存储用户选择的选项

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
                <h1>{newsDetailData.title}</h1>
            </TitleSection>
            <div>
                <img alt="" width={400} src={getNestedObjectValue(newsDetailData, 'image.fields.file.url')} />
            </div>
            {/* 第一步：听力练习 */}
            {!showComparison && !showChoices && (
                <div>
                    <audio src={audioUrl} controls></audio>
                    {/* 获取填空问题内容 */}
                    {(() => {
                        const blanks = getNestedObjectValue(newsDetailData, 'fillInTheBlank');
                        if (!blanks) return null;
                        // 计算空格数量
                        const blankCount = (blanks.match(/_+/g) || []).length;
                        const inputValues = Array(blankCount).fill('');
                        const handleInputChange = (index) => (e) => {
                            const newValues = [...inputValues];
                            newValues[index] = e.target.value;
                            // 这里可以根据需求更新 userAnswer 或者其他状态
                        };
                        return (
                            <BlanksContainer>
                                {/* 显示填空问题内容，将空格替换为输入框 */}
                                {blanks.split(/(_+)/).map((part, index) => {
                                    if (part.match(/_+/)) {
                                        const blankIndex = (blanks.split(/(_+)/).slice(0, index).filter(p => p.match(/_+/)).length);
                                        return (
                                            <input
                                                key={index}
                                                type="text"
                                                value={inputValues[blankIndex]}
                                                onChange={handleInputChange(blankIndex)}
                                                placeholder=""
                                            />
                                        );
                                    }
                                    return <span key={index}>{part}</span>;
                                })}
                                <button onClick={handleSubmit}>submit</button>
                            </BlanksContainer>
                        );
                    })()}
                </div>
            )}
            {/* 第二步：对比答案 */}
            {showComparison && !showChoices && (
                <div>
                    <p>用户输入：{userAnswer}</p>
                    <p>原文：{originalText}</p>
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
            <RichtextContent>{documentToReactComponents(newsDetailData.keywords)}</RichtextContent>
            <Footer />
        </Container>
    );
}

export default NewsDetailPage;