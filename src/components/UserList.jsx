import { appContentStore } from "../stores/appContentStore";
import styled from "styled-components";
import { List, ListItems, Input } from "./List";
import { Button } from "./Button";

export const UserList = () => {
  const { appContent, list, deleteTasks, toggleSelect, clearActive, completeTasks } = appContentStore();

  // Only show tasks that are not completed
  const activeTasks = list.filter((task) => !task.completed);

  // If there are no active tasks, show a message
  if (activeTasks.length === 0) return <p>We got nothing so far. Let's be productive!</p>;

  return (
    <div>
      <h2>{appContent.subHeading}</h2>
      <List>
        {activeTasks.map((task) => (
          <ListItems key={task.id}>
            <Input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <label>{task.task}</label>
          </ListItems>
        ))}
      </List>
      <p>{activeTasks.length} tasks</p>
      <Button onClick={completeTasks}>Complete</Button>
      <Button onClick={deleteTasks}>Delete</Button>
      <Button onClick={clearActive}>Clear all</Button>
    </div>
  );
};