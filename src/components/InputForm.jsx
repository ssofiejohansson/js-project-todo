import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  padding: 20px;
  border: 4px solid #333;
  border-radius: 40px;
  width: 100%;
  height: 100px;
  resize: none;
  `