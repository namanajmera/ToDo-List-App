import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoList() {
    const listToDo = useSelector((state) => state.toDo.toDoList)
    return (
        <ul>
        {
            listToDo && listToDo.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))
        }
        </ul>
    )
}
