import { useEffect, useState } from 'react';
import {
  fetchTodos,
  Todo,
  StoreState,
  deleteTodo,
} from '../store/features/todosSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const App = () => {
  const [fetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();

  const { todoList }: StoreState = useAppSelector(
    (state) => state.todoList
  );

  useEffect(() => {
    if (todoList.length) {
      setFetching(false);
    }
  }, [todoList]);

  const onButtonClick = () => {
    dispatch(fetchTodos());
    setFetching(true);
  };

  const onTodoClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const renderList = () => {
    console.log(todoList);
    return todoList.map((todo: Todo) => {
      return (
        <div
          onClick={() => {
            onTodoClick(todo.id);
          }}
          key={todo.id}
        >
          {todo.title}
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={() => onButtonClick()}>Fetch!</button>
      {fetching ? 'loading...' : null}
      {renderList()}
    </div>
  );
};
