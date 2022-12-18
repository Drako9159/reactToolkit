import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import taskSlice from "./features/tasks/taskSlice";
//useDispach para actualizar el setState
//userSelector para traer el state getState

function App() {
  return (
    <div className="App">
      <h1>Hola mundito</h1>
      <TaskForm></TaskForm>
      <TasksList></TasksList>
    </div>
  );
}

export default App;
