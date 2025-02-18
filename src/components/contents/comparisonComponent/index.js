import React from 'react';
import { Highlight, AnswerHighlight } from './style';
import ReactDOMServer from 'react-dom/server';

const renderText = ({ blanksArray, inputValues, isUserInput }) => {
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

const ComparisonComponent = ({ blanksArray, inputValues, handleConfirmComparison }) => {
    return (
        <div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yours:&nbsp;
                {renderText({ blanksArray, inputValues, isUserInput: true })}
            </p>
            <p>Original text:&nbsp;
                {renderText({ blanksArray, inputValues, isUserInput: false })}
            </p>
            <button onClick={handleConfirmComparison}>&nbsp;&nbsp;ok&nbsp;&nbsp;</button>
        </div>
    );
};

export const getComparisonText = ({ blanksArray, inputValues }) => {
    const yoursText = ReactDOMServer.renderToStaticMarkup(renderText({ blanksArray, inputValues, isUserInput: true })).replace(/<[^>]*>/g, '');
    const originalText = ReactDOMServer.renderToStaticMarkup(renderText({ blanksArray, inputValues, isUserInput: false })).replace(/<[^>]*>/g, '');
    return `Yours: ${yoursText} \n Original: ${originalText}`;
};

export default ComparisonComponent;