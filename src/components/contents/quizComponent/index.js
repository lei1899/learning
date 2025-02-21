import React, { useState } from 'react';
import { QuizLi, CorrectLabel, CorrectAnswer, QuestionProcess } from './style';

const QuizComponent = ({questions}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleOptionClick = (index) => {
        setSelectedOption(index);
        setShowAnswer(true);
    };

    const handleNextClick = () => {
        setSelectedOption(null);
        setShowAnswer(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div>
            <QuestionProcess>Question {currentQuestionIndex + 1}/{questions.length}</QuestionProcess>
            <p>{currentQuestion.question}</p>
            <ul>
                {currentQuestion.options.map((option, index) => (
                    <QuizLi key={index} onClick={() => handleOptionClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedOption === index ? 'lightgray' : 'white' }}>
                        {option}
                    </QuizLi>
                ))}
            </ul>
            {showAnswer && (
                <div>
                    {selectedOption === currentQuestion.correctAnswer ? (
                        <CorrectLabel>Correct</CorrectLabel>
                        ) : (
                        <CorrectAnswer>Correct answer: {currentQuestion.options[currentQuestion.correctAnswer]}</CorrectAnswer>
                    )}
                </div>
            )}
            {currentQuestionIndex < questions.length - 1 && (
                <button onClick={handleNextClick}>Next</button>
            )}
        </div>
    );
};

export default QuizComponent;