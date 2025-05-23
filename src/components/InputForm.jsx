import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 10px;
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
  border-radius: none;
  background-color: lightblue;
  width: 100%;
  height: 100px;
  resize: none;

  &:focus {
    outline: 6px solid #333;
  
    
  }
  &::placeholder {
    
   
  }
  `