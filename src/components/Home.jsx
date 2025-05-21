import { appContentStore } from "../stores/appContentStore";
import { UserInput } from "./UserInput";
import { UserList } from "./UserList";
import { UserComplete } from "./UserComplete";

export const Home = () => {
  const { appContent } = appContentStore() // destructuring the appContent from the store

  return (
    <>
      <h1>{appContent.heading}</h1>
      <UserInput />
      <UserList />

    </>
  )
}