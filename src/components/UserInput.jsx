import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { useState } from "react";
import { Button } from "./Button";
import { FormContainer, TextArea } from "./InputForm";
import { Text } from "./Typography"

export const UserInput = () => {
  const [text, setText] = useState("")
  const { appContent } = appContentStore()
  const { addTask } = appTaskStore()

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
    <>
      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder={appContent.inputPlaceholder}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="large"
          type="submit"
          title="Let's do it!"
          aria-label="Add new task"
          role="button"
          disabled={text.length < 2}
        >
          ➕
        </Button>



      </FormContainer>

      {/* will eventually add an animation on the page */}
      {/* {text.length >= 2 && (
        <Text className={`right-align animation${text.length >= 2 ? " visible" : ""}`}>↑</Text>
      )} */}
    </>
  )
}