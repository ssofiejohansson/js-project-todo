import { appContentStore } from "../stores/appContentStore";

export const UserComplete = () => {
  const { list, clearCompleted, uncompleteTasks, toggleSelect, appContent } = appContentStore();
  const completedTasks = list.filter((task) => task.completed);

  if (completedTasks.length === 0) return null;

  return (
    <div>
      <h3>{appContent.completedTasks}</h3>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <label style={{ textDecoration: "line-through", color: "#888" }}>
              {task.task}
            </label>
          </li>
        ))}
      </ul>
      <p>{completedTasks.length} tasks</p>
      <button onClick={clearCompleted}>Clear all</button>
      <button onClick={uncompleteTasks}>Uncomplete</button>
    </div>
  );
};