import React, { useEffect } from 'react';

const FillInTheBlankComponent = ({ blanksArray, handleSubmit, inputValues, setInputValues }) => {

    useEffect(() => {
        if (Array.isArray(blanksArray)) {
            const totalBlankCount = blanksArray.length;
            if (inputValues.length === 0) {
                setInputValues(Array(totalBlankCount).fill(''));
            }
        }
    }, [blanksArray, inputValues, setInputValues]);

    const handleInputChange = (index) => (e) => {
        const newValues = [...inputValues];
        newValues[index] = e.target.value;
        setInputValues(newValues);
    };

    if (!blanksArray || !Array.isArray(blanksArray)) return null;

    const allInputsFilled = inputValues.every(value => value.length > 0);

    let currentIndex = 0;
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
                                const answerLength = item.fields.answer ? item.fields.answer.length : 10;
                                const input = (
                                    <input
                                        key={`${outerIndex}-${innerIndex}`}
                                        type="text"
                                        value={inputValues[currentIndex]}
                                        onChange={handleInputChange(currentIndex)}
                                        size={answerLength + 10}
                                        style={{ fontSize: '16px' }}
                                    />
                                );
                                currentIndex++;
                                return input;
                            }
                            return <span key={`${outerIndex}-${innerIndex}`}>{part}</span>;
                        })}
                    </>
                );
                
            })}
            <button disabled={!allInputsFilled} onClick={handleSubmit}>submit</button>
        </>
    );
};

export default FillInTheBlankComponent;