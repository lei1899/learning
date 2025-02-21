import styled from "styled-components";

export const QuizLi = styled.li`
  cursor: pointer;
  background-color: ${props => props.selected ? 'gray' : 'white'};
  margin-bottom: 10px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Default shadow for unselected items
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Shadow for hover state
  }
`;

export const CorrectLabel = styled.label`
  font-weight: bold;
  color: green;
  font-size: 20px;
  display: inline-block;

  &::before {
    content: '✔'; 
    color: green; // Ensure the checkmark is also green
    margin: 5px; // Add some space between the checkmark and the text
  }
`;

export const CorrectAnswer = styled.label`
  font-weight: bold;
  color: red;
  font-size: 20px;
  display: inline-block;

  &::before {
    content: '✖ '; 
    color: red; // Ensure the checkmark is also green
    margin: 5px; // Add some space between the checkmark and the text
    
  }
`;

export const QuestionProcess = styled.label`
  font-weight: bold;
  color: green;
  font-size: 16px;
`;
