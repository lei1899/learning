import React from 'react';
import { Highlight, AnswerHighlight } from './style';

const ComparisonComponent = ({ blanksArray, inputValues, handleConfirmComparison }) => {
    const renderText = (isUserInput) => {
        let currentIndex = 0;
        if (!blanksArray) {
            return <></>;
        }
        return (
            <>
                {blanksArray.map((item, outerIndex) => {
                    if (!item.fields || !item.fields.blank) {
                        return null;
                    }
                    return (
                        <>
                            {item.fields.blank.split(/(_+)/).map((part, innerIndex) => {
                                if (part.match(/_+/)) {
                                    const highlightComponent = isUserInput ? Highlight : AnswerHighlight;
                                    const value = isUserInput ? inputValues[currentIndex] || '' : item.fields.answer;
                                    const input = React.createElement(
                                        highlightComponent,
                                        { key: `${outerIndex}-${innerIndex}` },
                                        value
                                    );
                                    currentIndex++;
                                    return input;
                                }
                                return <span key={`${outerIndex}-${innerIndex}`}>{part}</span>;
                            })}
                        </>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <p>用户输入：
                {renderText(true)}
            </p>
            <p>原文：
                {renderText(false)}
            </p>
            <button onClick={handleConfirmComparison}>确认</button>
        </div>
    );
};

export default ComparisonComponent;