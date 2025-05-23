import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  padding: 20px;
  outline: 4px solid #333;
  border: none;
  background-color: lightblue;
  width: 100%;
  height: 80px;
  resize: none;
  `