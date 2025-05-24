import styled from "styled-components";

export const FormContainer = styled.form`
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    width: 100%;
    max-width: 800px;
`;

export const TextArea = styled.textarea`
    font-size: 16px;
    padding: 20px;
    outline: 4px solid #333;
    border: none;
    border-radius: 0;
    background-color: lightblue;
    width: 100%;
    height: 100px;
    resize: none;

  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background: lightpink;
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    background: #333;
    border-radius: 0;
  }
  &:focus {
    outline: 6px solid #333;  
  }
  &::placeholder {
    color: #333;
  }
  `