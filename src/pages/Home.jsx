import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { UserInput } from "../components/UserInput";
import { UserList } from "../components/UserList";
import { UserComplete } from "../components/UserComplete";
import styled from "styled-components";
import { Heading } from "../components/Typography";

const BodyContainer = styled.main`
  background-color: lightpink;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;

  @media (min-width: 1028px) {
    flex-direction: row;
  }
`;

const UserInputContainer = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  gap: 20px;


  @media (min-width: 1028px) {
    width: ${({ hasTasks }) => (hasTasks ? "40%" : "60%")};
    transition: width 0.3s;
    padding: 40px;
  }
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: lightpink;
  padding: 20px;
  flex: 1 1 0;  
  min-height: 0;   
  overflow-y: auto; 

  @media (min-width: 1028px) {
    width: ${({ hasTasks }) => (hasTasks ? "60%" : "40%")};
    //Change this if needed. Pushing down content with margin-top
   // margin-top: ${({ hasTasks }) => (hasTasks ? "0px" : "200px")};
    padding: 40px;
    transition: width 0.3s;
  }
`;

export const Home = () => {
  const { appContent } = appContentStore();
  const { list } = appTaskStore(); // get the tasks
  const hasTasks = list.length > 0;

  return (
    <BodyContainer>
      <UserInputContainer hasTasks={hasTasks}>
        <Heading>{appContent.heading}</Heading>
        <UserInput />
      </UserInputContainer>
      <ListContainer hasTasks={hasTasks}>
        <UserList />
        <UserComplete />
      </ListContainer>
    </BodyContainer>
  );
};