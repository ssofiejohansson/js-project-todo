import { appContentStore } from "../stores/appContentStore";
import { appTaskStore } from "../stores/appTaskStore";
import { List, ListItems, Label } from "./List";
import { Button, ButtonContainer } from "./Button";
import { SubHeading, SmallHeading, Text } from "./Typography";

export const UserList = () => {
  const { appContent } = appContentStore();
  const { list, deleteTaskById, completeTaskById, clearAll, moveTaskUp, moveTaskDown } = appTaskStore();

  // Only show tasks that are not completed
  const activeTasks = list.filter((task) => !task.completed);
  const completedTasks = list.filter((task) => task.completed);

  //adding todays date
  const today = new Date().toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "numeric"
  });

  // If there are no active tasks, show a message
  if (activeTasks.length === 0 && completedTasks.length === 0) return <SubHeading>{appContent.listPlaceholder}</SubHeading>;

  return (
    <>
      <Button className="large right-align" onClick={clearAll}
        title="Clear & restart"
        aria-label="Clear all tasks"
        role="button">✖️</Button>

      <SmallHeading>{appContent.subHeading} {today}:</SmallHeading>

      <List>
        {activeTasks.map((task) => (
          <ListItems key={task.id}>
            <Label>
              <Button title="Move up" aria-label="Prioritize task"
                onClick={() => moveTaskUp(task.id)}
                disabled={list.findIndex(t => t.id === task.id) === 0}
              >↑</Button>
              <Button title="Move down" aria-label="Unprioritize task" onClick={() => moveTaskDown(task.id)}
                disabled={list.findIndex(t => t.id === task.id) === list.length - 1}
              >↓</Button>
              {task.task}
            </Label>
            <ButtonContainer>
              <Button title="Good job!" aria-label="Complete task" role="button" onClick={() => completeTaskById(task.id)}>✔️</Button>
              <Button title="Delete forever"
                aria-label="Delete task"
                role="button" onClick={() => deleteTaskById(task.id)}>✖️</Button>
            </ButtonContainer>
          </ListItems>
        ))}
        <Text className="right-align">{activeTasks.length} ➕</Text>
      </List>

    </>
  );
};