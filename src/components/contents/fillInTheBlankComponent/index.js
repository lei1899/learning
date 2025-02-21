import React, { useEffect } from 'react';import { BlankInput } from "./style";
const FillInTheBlankComponent = ({ blankString, handleSubmit, inputValues, setInputValues }) => {
    useEffect(() => {
        if (typeof blankString !== 'string') {
            return;
        }
        const matches = blankString.match(/__(.*?)__/g) || [];
        setInputValues(matches.map(() => ''));
    }, [blankString, setInputValues]);

    const handleInputChange = (index) => (e) => {   
        const newValues = [...inputValues];
        newValues[index] = e.target.value; 
        setInputValues(newValues);
    };
    
    if (typeof blankString !== 'string') return null;

    const allInputsFilled = inputValues.every(value => value.length > 0);
    let currentIndex = 0;
    return (
        <>
            {blankString.split(/(__.*?__)/).map((part, index) => {
                if (part.match(/__.*?__/)) {
                    const cleanPart = part.replace(/__/g, '');
                    const input = (
                        <BlankInput
                            key={index}
                            type="text"
                            value={inputValues[currentIndex]}
                            onChange={handleInputChange(currentIndex)}
                            size={cleanPart.length + 2}
                        />
                    );
                    currentIndex++;
                    return input;
                }
                return <span key={index}>{part}</span>;
            })}
            <button disabled={!allInputsFilled} onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default FillInTheBlankComponent;