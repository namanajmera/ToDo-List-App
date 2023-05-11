import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    toDoList: [
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
    ],
  },
  reducers: {
    add: (state, action) => {
      state.toDoList.push(action.payload);
    },
    remove: (state, action) => {
      state.toDoList = state.toDoList.filter(
        (item) => item.id !== action.payload
      );
    },
    toggle: (state, action) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    },
  },
});

export const { add, remove, toggle } = toDoSlice.actions;
