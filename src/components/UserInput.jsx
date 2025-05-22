import { appContentStore } from "../stores/appContentStore";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const FormContainer = styled.form`

  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 20px;
  border: 4px solid #333;
  border-radius: 40px;
  width: 100%;
  height: 100px;
  resize: none;
  `

export const UserInput = () => {
  const [text, setText] = useState("")
  const { appContent, addTask } = appContentStore() // destructuring the appContent from the store

  const handleSubmit = e => {
    e.preventDefault()
    addTask(text)
    setText("")
  }

  return (

    <FormContainer onSubmit={handleSubmit}>
      <TextArea placeholder={appContent.inputPlaceholder} value={text} onChange={e => setText(e.target.value)} />
      <Button onClick={() => {
        if (text.length < 2) return;
        addTask(text);
        setText("");
      }}
        disabled={text.length < 2}
      >Let's do it!</Button>
    </FormContainer>

  )
}