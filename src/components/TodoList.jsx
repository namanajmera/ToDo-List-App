import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteButton from './DeleteButton'
import { toggle } from '../store/slice/ToDoSlice';

export default function TodoList({onHandleDelete}) {
    const listToDo = useSelector((state) => state.toDo.toDoList);
    const dispatch = useDispatch();

    const handleDone = (item) => {
        dispatch(toggle(item.id));
    }
    return (
        <ul>
        {
            listToDo && listToDo.map((item) => (
                <div key={item.id} className='to-do-list-container'>
                    <li onClick={() => handleDone(item)} style={{
                        textDecoration: item.done ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}>{item.text}</li>
                    <DeleteButton onHandleDelete={() => onHandleDelete(item.id)}/>
                </div>
            ))
        }
        </ul>
    )
}
