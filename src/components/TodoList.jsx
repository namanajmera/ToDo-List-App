import React from 'react'
import { useSelector } from 'react-redux'
import DeleteButton from './DeleteButton'

export default function TodoList({onHandleDelete}) {
    const listToDo = useSelector((state) => state.toDo.toDoList);
    return (
        <ul>
        {
            listToDo && listToDo.map((item) => (
                <div key={item.id}>
                    <li >{item.text}</li>
                    <DeleteButton onHandleDelete={() => onHandleDelete(item.id)}/>
                </div>
            ))
        }
        </ul>
    )
}
