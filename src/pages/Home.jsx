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
      width: ${({ $hastasks }) => ($hastasks ? "40%" : "60%")};
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

  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: none;
  }
  &::-webkit-scrollbar-track {
    background: lightblue;
    border-radius: none;
  }

  @media (min-width: 1028px) {
     width: ${({ $hastasks }) => ($hastasks ? "60%" : "40%")};
      padding: 60px;
      transition: width 0.3s;
      min-height: 0;
      overflow-y: auto;
  }
`;

export const Home = () => {
  // const { appContent } = appContentStore();
  const { list } = appTaskStore(); // get the tasks
  const hastasks = list.length > 0;

  return (
    <BodyContainer>
      <UserInputContainer $hastasks={hastasks}>
        <Heading>
          Let's get some <span className="highlight">shit</span> done.
        </Heading>
        <UserInput />
      </UserInputContainer>
      <ListContainer $hastasks={hastasks}>
        <UserList />
        <UserComplete />
      </ListContainer>
    </BodyContainer>
  );
};