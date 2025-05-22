import styled from "styled-components";

const FormContainer = styled.form`
  background-color: red;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  `

export const InputForm = () => {
  return (
    <FormContainer>
      <TextArea placeholder="Enter text" />
      <button type="submit">Submit</button>
    </FormContainer>
  );
};