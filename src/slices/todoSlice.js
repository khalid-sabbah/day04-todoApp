import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      const index = state.items.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.items[index].status = 'done';
      }
    },
  },
});

export const { addTodo, removeTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
