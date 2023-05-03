import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [listToDo, setListToDo] = useState([
    {
      id: 1,
      text: "Learn React",
    },
    {
      id: 2,
      text: "Learn React Redux",
    },
    {
      id: 3,
      text: "Learn Redux Toolkit",
    },
  ]);

  const handleSumbit = (e) => {
    e.preventDefault();
    let length = listToDo.length;
    let toDoObject = {
      id: length + 1,
      text: text,
    };
    setListToDo([...listToDo, toDoObject]);
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
