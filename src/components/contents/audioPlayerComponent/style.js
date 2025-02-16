import styled from "styled-components";

export const PlayerButton = styled.span`
  font-size: 16px;
  padding: 5px 5px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color:rgb(69, 179, 63);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
    transform: translateY(2px);
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const PlayerButtonGroup = styled.span`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`;