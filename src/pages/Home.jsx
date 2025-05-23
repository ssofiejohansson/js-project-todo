import { appContentStore } from "../stores/appContentStore";
import { UserInput } from "../components/UserInput";
import { UserList } from "../components/UserList";
import { UserComplete } from "../components/UserComplete";
import styled from "styled-components";

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
 @media (min-width: 1028px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-between;
  } 
  `

const UserInputContainer = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100dvh;
  min-height: 500px;
  padding: 20px;

  @media (min-width: 1028px) {
    height: 100vh;
    width: 50%;
    align-items: flex-start;
    
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  min-height: 600px;
  background-color: lightpink;
  padding: 20px;

   @media (min-width: 1028px) {
    height: 100vh;
    width: 50%;
    align-items: flex-start;
  
  }
`
const Heading = styled.h1`
  font-size: 66px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -5px;
  margin: 20px;

  @media (min-width: 1028px) {
    font-size: 86px;
    
  }
`

export const Home = () => {
  const { appContent } = appContentStore() // destructuring the appContent from the store

  return (
    <BodyContainer>

      <UserInputContainer>
        <Heading>{appContent.heading}</Heading>
        <UserInput />

      </UserInputContainer>

      <ListContainer>

        <UserList />
        <UserComplete />

      </ListContainer>

    </BodyContainer >
  )
}