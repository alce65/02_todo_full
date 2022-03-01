import "./todo.css";
import { Add } from "./add";
import { Task } from "./task";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTasks } from "../../redux/tasks/action-creators";
import { TASKS } from "../../models/tasks.data";

export function ToDo() {
  const tasks = useSelector((state) => state.tasks);
  console.log({ tasks });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <>
      <Add />
      {tasks.length ? (
        <>
          <h2>Lista de tareas</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
