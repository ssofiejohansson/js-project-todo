import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { List, ListItems, Label } from "./List";
import { Button, ButtonContainer } from "./Button";
import { SubHeading, SmallHeading, Text } from "./Typography";


export const UserComplete = () => {
  const { appContent } = appContentStore();
  const { list, uncompleteTaskById, deleteTaskById } = appTaskStore();

  const completedTasks = list.filter((task) => task.completed);

  if (completedTasks.length === 0) return null;

  return (
    <>
      <SmallHeading>{appContent.completedTasks}</SmallHeading>    <Text>{completedTasks.length} tasks</Text>
      <List>
        {completedTasks.map((task) => (
          <ListItems key={task.id}>

            <Label className="completed">
              {task.task}
            </Label>
            <ButtonContainer>
              <Button onClick={() => uncompleteTaskById(task.id)}>🔙</Button>
              <Button onClick={() => deleteTaskById(task.id)}>✖️</Button>
            </ButtonContainer>
          </ListItems>
        ))}
      </List>

    </>
  );
};