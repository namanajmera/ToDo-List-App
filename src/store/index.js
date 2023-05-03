import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice } from "./slice/ToDoSlice";

const store  = configureStore({
    reducer:{
        toDo: toDoSlice.reducer,
    }
});

export {store};