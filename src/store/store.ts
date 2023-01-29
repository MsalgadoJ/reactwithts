import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { TodosSlice } from './features/todosSlice';

export const store = configureStore({
  reducer: { todoList: TodosSlice.reducer },
});

//calls the action
export const useAppDispatch: () => typeof store.dispatch =
  useDispatch;
//returns the state
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
