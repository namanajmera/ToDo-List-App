import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

export default function DeleteButton({onHandleDelete}) {
  return (
    <button onClick={onHandleDelete} style={{
        background: 'red',
        color: 'white',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
      }}>
      <AiFillDelete /> Delete
    </button>
  )
}
