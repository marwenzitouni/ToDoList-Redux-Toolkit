import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  todoList:[],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.todoList.push({ ...payload });
    },
    deleteTask: (state, { payload }) => {
      state.todoList = state.todoList.filter((el) => el.id !== payload);
    },
    changeStatus: (state, { payload }) => {
      state.todoList = state.todoList.map((el) =>
        el.id === payload ? { ...el, isDone: !el.isDone } : el
      );
    },
    editTask: (state, { payload }) => {
      state.todoList = state.todoList.map((el) =>
        el.id === payload.id ? { ...el, description: payload.deskEdit } : el
      );
    },
  },
});

export const { addTask, deleteTask, changeStatus, editTask } = todoSlice.actions;

export default todoSlice.reducer;