import "./todo.css";
import { Add } from "./add";
import { Task } from "./task";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTasks } from "../../redux/tasks/action-creators";

export function ToDo() {
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user);
  console.log({ tasks });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks(user.token));
  }, [dispatch, user.token]);

  return (
    <>
      <Add />
      {tasks.length ? (
        <>
          <h2>Lista de tareas</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <Task task={task} key={task._id} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
