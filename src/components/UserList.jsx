import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { List, ListItems, Label } from "./List";
import { Button, ButtonContainer } from "./Button";
import { SubHeading, SmallHeading, Text } from "./Typography";

export const UserList = () => {
  const { appContent } = appContentStore();
  const { list, deleteTaskById, completeTaskById, clearAll } = appTaskStore();

  // Only show tasks that are not completed
  const activeTasks = list.filter((task) => !task.completed);
  const completedTasks = list.filter((task) => task.completed);

  // If there are no active tasks, show a message
  if (activeTasks.length === 0 && completedTasks.length === 0) return <SubHeading>{appContent.listPlaceholder}</SubHeading>;

  return (
    <>
      <Button className="large right-align" onClick={clearAll}>✖️</Button>

      <SmallHeading>{appContent.subHeading}</SmallHeading>
      <Text>{activeTasks.length} tasks</Text>
      <List>
        {activeTasks.map((task) => (
          <ListItems key={task.id}>
            <Label>{task.task}</Label>
            <ButtonContainer>
              <Button onClick={() => completeTaskById(task.id)}>✔️</Button>
              <Button onClick={() => deleteTaskById(task.id)}>✖️</Button>
            </ButtonContainer>
          </ListItems>
        ))}
      </List>

    </>
  );
};