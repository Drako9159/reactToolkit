import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const stateTask = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleChange(e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: "2",
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      ></input>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
