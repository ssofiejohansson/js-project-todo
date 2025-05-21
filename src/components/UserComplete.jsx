import { appContentStore } from "../stores/appContentStore";

export const UserComplete = () => {
  const { list, clearCompleted } = appContentStore();
  const completedTasks = list.filter((task) => task.completed);

  if (completedTasks.length === 0) return null;

  return (
    <div>
      <h3>Completed tasks</h3>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <label style={{ textDecoration: "line-through", color: "#888" }}>
              {task.task}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear all</button>
    </div>
  );
};