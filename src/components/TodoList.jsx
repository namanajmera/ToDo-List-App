import React from 'react'

export default function TodoList({listToDo}) {
  return (
    <ul>
    {
        listToDo.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))
    }
    </ul>
  )
}
