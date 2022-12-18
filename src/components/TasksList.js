import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  function handleDelete(id){
    dispatch(deleteTask(id))

  }

  return <div>{tasks.map((e) => {
    return <div key={e.id}>
        <h3>{e.title}</h3>
        <p>{e.description}</p>
        <button onClick={()=>handleDelete(e.id)}>Delete</button>

    </div>
  })}</div>;
}

export default TasksList;
