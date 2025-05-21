import { appContentStore } from "../stores/appContentStore";


export const UserList = () => {
  const { appContent, list, deleteTasks, toggleTask, clearAll, completeTasks } = appContentStore() // destructuring the appContent from the store

  if (list.length === 0) return <p>No tasks yet. add one!</p>

  return (
    <>
      <h2>{appContent.subHeading}</h2>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <label>{task.task}</label>

          </li>
        ))}
      </ul>

      <button onClick={completeTasks}>Complete</button>
      <button onClick={deleteTasks}>Delete</button>
      <button onClick={clearAll}>Clear all</button>
    </>
  )
}