import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { List, ListItems, Label, Input } from "./List";
import { Button, ButtonContainer } from "./Button";
import { SubHeading, SmallHeading, Text } from "./Typography";


export const UserComplete = () => {
  const { appContent } = appContentStore();
  const { list, clearCompleted, uncompleteTasks, toggleSelect } = appTaskStore();

  const completedTasks = list.filter((task) => task.completed);

  if (completedTasks.length === 0) return null;

  return (
    <div>
      <SmallHeading>{appContent.completedTasks}</SmallHeading>
      <List>
        {completedTasks.map((task) => (
          <ListItems key={task.id}>
            <Input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <Label>
              {task.task}
            </Label>
          </ListItems>
        ))}
      </List>
      <Text>{completedTasks.length} tasks</Text>
      <ButtonContainer>
        <Button onClick={uncompleteTasks}>Uncomplete</Button>
        <Button onClick={clearCompleted}>Clear all</Button>
      </ButtonContainer>
    </div>
  );
};