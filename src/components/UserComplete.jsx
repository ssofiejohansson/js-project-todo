import { appContentStore } from "../stores/appContentStore";
import { List, ListItems } from "./List";
import { Button } from "./Button";

export const UserComplete = () => {
  const { list, clearCompleted, uncompleteTasks, toggleSelect, appContent } = appContentStore();
  const completedTasks = list.filter((task) => task.completed);

  if (completedTasks.length === 0) return null;

  return (
    <div>
      <h3>{appContent.completedTasks}</h3>
      <List>
        {completedTasks.map((task) => (
          <ListItems key={task.id}>
            <input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <label style={{ textDecoration: "line-through", color: "#888" }}>
              {task.task}
            </label>
          </ListItems>
        ))}
      </List>
      <p>{completedTasks.length} tasks</p>
      <Button onClick={clearCompleted}>Clear all</Button>
      <Button onClick={uncompleteTasks}>Uncomplete</Button>
    </div>
  );
};