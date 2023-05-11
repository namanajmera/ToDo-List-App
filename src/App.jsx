import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./store/slice/ToDoSlice";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [text, setText] = useState("");
  const listToDo = useSelector((state) => state.toDo.toDoList)
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    let toDoObject = {
      id: uuidv4(),
      text: text,
      done: false 
    };
    dispatch(add(toDoObject))
    setText("");
  };

  const onHandleDelete = (id) => {
    dispatch(remove(id))
  }
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddToDo text={text} setText={setText} handleSumbit={handleSumbit} />
      <TodoList listToDo={listToDo} onHandleDelete={onHandleDelete}/>
    </div>
  );
}

export default App;
