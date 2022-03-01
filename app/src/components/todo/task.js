import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeTask, updateTask } from "../../redux/tasks/action-creators";

export function Task({ task }) {
  const dispatch = useDispatch();

  const deleteTask = (task) => {
    dispatch(removeTask(task));
  };
  const toggleTask = (task) => {
    dispatch(updateTask(task));
  };

  function handleClick() {
    deleteTask(task);
  }

  function handleChange() {
    toggleTask({ ...task, isCompleted: !task.isCompleted });
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <Link to={`/detail/${task.id}`}>
        <span className={task.isCompleted ? "task-completed" : ""}>
          {task.name}
        </span>{" "}
        -<span>{task.responsible}</span>
      </Link>

      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </li>
  );
}

/* export function Task({task, deleteTask}) {
    return (
        <li>
            <div>{task}</div>
        </li>
    );
} */
