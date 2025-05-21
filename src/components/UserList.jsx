import { appContentStore } from "../stores/appContentStore";

export const UserList = () => {
  const { appContent, list, deleteTasks, toggleSelect, clearActive, completeTasks } = appContentStore();

  // Only show tasks that are not completed
  const activeTasks = list.filter((task) => !task.completed);

  if (activeTasks.length === 0) return <p>No tasks yet. add one!</p>;

  return (
    <>
      <h2>{appContent.subHeading}</h2>
      <ul>
        {activeTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelect(task.id)}
            />
            <label>{task.task}</label>
          </li>
        ))}
      </ul>
      <p>{activeTasks.length} tasks</p>
      <button onClick={completeTasks}>Complete</button>
      <button onClick={deleteTasks}>Delete</button>
      <button onClick={clearActive}>Clear all</button>
    </>
  );
};