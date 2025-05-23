import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { List, ListItems, Input, Label } from "./List";
import { Button, ButtonContainer } from "./Button";
import { SubHeading, SmallHeading, Text } from "./Typography";

export const UserList = () => {
  const { appContent } = appContentStore();
  const { list, deleteTasks, toggleSelect, clearActive, completeTasks } = appTaskStore();

  // Only show tasks that are not completed
  const activeTasks = list.filter((task) => !task.completed);
  const completedTasks = list.filter((task) => task.completed);

  // If there are no active tasks, show a message
  if (activeTasks.length === 0 && completedTasks.length === 0) return <SubHeading>{appContent.listPlaceholder}</SubHeading>;

  return (
    <div>
      <SmallHeading>{appContent.subHeading}</SmallHeading>
      <Text>{activeTasks.length} tasks</Text>
      <List>
        {activeTasks.map((task) => (
          <ListItems key={task.id}>
            <Input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <Label>{task.task}</Label>
          </ListItems>
        ))}
      </List>

      <ButtonContainer>
        <Button onClick={completeTasks}>Complete</Button>
        <Button onClick={deleteTasks}>Delete</Button>
        <Button onClick={clearActive}>Clear all</Button>
      </ButtonContainer>
    </div>
  );
};