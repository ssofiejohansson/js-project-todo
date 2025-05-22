import { appContentStore } from "../stores/appContentStore";
import styled from "styled-components";

export const UserList = () => {
  const { appContent, list, deleteTasks, toggleSelect, clearActive, completeTasks } = appContentStore();

  // Only show tasks that are not completed
  const activeTasks = list.filter((task) => !task.completed);

  if (activeTasks.length === 0) return <p>We got nothing so far. Let's be productive!</p>;

  const ListContainer = styled.ul`
    padding: 0;
  `
  const ListItems = styled.li`
    list-style: none;
  `
  return (
    <div>
      <h2>{appContent.subHeading}</h2>
      <ListContainer>
        {activeTasks.map((task) => (
          <ListItems key={task.id}>
            <input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <label>{task.task}</label>
          </ListItems>
        ))}
      </ListContainer>
      <p>{activeTasks.length} tasks</p>
      <button onClick={completeTasks}>Complete</button>
      <button onClick={deleteTasks}>Delete</button>
      <button onClick={clearActive}>Clear all</button>
    </div>
  );
};