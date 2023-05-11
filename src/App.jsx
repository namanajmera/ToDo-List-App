import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/slice/ToDoSlice";

function App() {
  const [text, setText] = useState("");
  const listToDo = useSelector((state) => state.toDo.toDoList)
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    let length = listToDo.length;
    let toDoObject = {
      id: length + 1,
      text: text,
    };
    dispatch(add(toDoObject))
    setText("");
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddToDo text={text} setText={setText} handleSumbit={handleSumbit} />
      <TodoList listToDo={listToDo} />
    </div>
  );
}

export default App;
