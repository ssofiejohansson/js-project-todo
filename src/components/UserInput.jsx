import { appContentStore } from "../stores/appContentStore";
import { useState } from "react";

export const UserInput = () => {
  const [text, setText] = useState("")
  const { appContent, addTask } = appContentStore() // destructuring the appContent from the store

  const handleSubmit = e => {
    e.preventDefault()
    addTask(text)
    setText("")
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        <textarea placeholder={appContent.inputPlaceholder} value={text} onChange={e => setText(e.target.value)} />
      </form>
      <button onClick={() => {
        if (text.length < 2) return;
        addTask(text);
        setText("");
      }}
        disabled={text.length < 2}
      >
        {appContent.buttonText}
      </button>

    </>
  )
}