import React from 'react';
import { Highlight, AnswerHighlight, BoldText } from './style';
import ReactDOMServer from 'react-dom/server';

const renderUserText = ({ blankString, inputValues }) => {
    let currentIndex = 0;
    if (!blankString) {
        return <></>;
    }
    return (
        <>
            {blankString.split(/(__.*?__)/).map((part, index) => {
                if (part.match(/__.*?__/)) {
                    const inputValue = inputValues[currentIndex];
                    currentIndex++;
                    return <Highlight key={index}>{inputValue}</Highlight>;
                }
                return <span key={index}>{part}</span>;
            })}
        </>
    );
};

const renderInitText = ({ blankString }) => {
    if (typeof blankString !== 'string') {
        return <></>;
    }
    return (
        <>
            {blankString.split(/(__.*?__)/).map((part, index) => {
                if (part.match(/__.*?__/)) {
                    return <AnswerHighlight>{part.replace(/__/g, '')}</AnswerHighlight>;
                }
                return <span key={index}>{part}</span>; 
            })}
        </>
    );
};

export const renderBoldText = ({ blankString }) => {
    if (typeof blankString !== 'string') {
        return <></>;
    }
    return (
        <>
            {blankString.split(/(__.*?__)/).map((part, index) => {
                if (part.match(/__.*?__/)) {
                    return <BoldText>{part.replace(/__/g, '')}</BoldText>;
                }
                return <span key={index}>{part}</span>; 
            })}
        </>
    );
};

const ComparisonComponent = ({ blankString, inputValues, handleConfirmComparison }) => {
    return (
        <div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yours:&nbsp;
                {renderUserText({ blankString, inputValues })}
            </p>
            <p>Original text:&nbsp;
                {renderInitText( {blankString} )}
            </p>
            <button onClick={handleConfirmComparison}>&nbsp;&nbsp;ok&nbsp;&nbsp;</button>
        </div>
    );};

export const getComparisonText = ({ blankString, inputValues }) => {
    const yoursText = ReactDOMServer.renderToStaticMarkup(renderUserText({ blankString, inputValues })).replace(/<[^>]*>/g, '');
    const originalText = ReactDOMServer.renderToStaticMarkup(renderInitText({ blankString })).replace(/<[^>]*>/g, '');
    return `Yours: ${yoursText} \n Original: ${originalText}`;
};

export const getInitText = ({ blankString }) => {
    const initText = ReactDOMServer.renderToStaticMarkup(renderInitText( {blankString} )).replace(/<[^>]*>/g, '');
    return <p>{initText}</p>;
};

export default ComparisonComponent;