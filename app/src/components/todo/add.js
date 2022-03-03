/* eslint-disable react/no-typos */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../models/task";
import { createTask } from "../../redux/tasks/action-creators";

export function Add() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const addTask = (newTask) => {
    dispatch(createTask(newTask));
  };
  const [newTask, setNewTask] = useState(new Task());

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Added task", newTask);
    addTask({ ...newTask, responsible: { _id: user.id, name: user.userName } });
    setNewTask(new Task());
  };

  const handleChange = (ev) => {
    setNewTask({ ...newTask, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h2>Add Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nombre de la tarea"
          value={newTask.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="responsible"
          placeholder="Responsable de la de la tarea"
          value={user.userName}
          readOnly
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
