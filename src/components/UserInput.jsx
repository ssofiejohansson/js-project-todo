import { appContentStore } from "../stores/appContentStore";
import { useState } from "react";
import { Button } from "./Button";
import { FormContainer, TextArea } from "./InputForm";

export const UserInput = () => {
  const [text, setText] = useState("")
  const { appContent, addTask } = appContentStore() // destructuring the appContent from the store

  const handleSubmit = e => {
    e.preventDefault()
    addTask(text)
    setText("")
  }

  //Press enter to submit the form
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (text.length >= 2) {
        handleSubmit(e);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextArea
        placeholder={appContent.inputPlaceholder}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        type="submit"
        disabled={text.length < 2}
      >
        Let's do it!
      </Button>
    </FormContainer>
  )
}