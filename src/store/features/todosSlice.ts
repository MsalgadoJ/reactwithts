import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface StoreState {
  todoList: Todo[];
}
const initialState: StoreState = {
  todoList: [],
};

// Takes two arguments:
// One is the key for the async thunk that has to be unique
// The other, async function to retrieve the data
export const fetchTodos = createAsyncThunk(
  'todos/fetch',
  async (thunkAPI) => {
    const response = await axios.get<Todo[]>(url);
    return response.data;
  }
);

export const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  // Reducers is an object that contains our actions. The actions are the functions that can mutate our state
  reducers: {},
  extraReducers: (builder) => {
    /* addCase takes two parameters:
      - the first is the name of the async thunk. The async thunk has three states:
        fullfilled, loading and error
      - the second one is a function with other two arguments (state and action).
        The action is the one that is going to contain the data of the async thunk
    */
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todoList = action.payload;
    });
  },
});

export default TodosSlice.reducer;
