import {
  fetchTodos,
  Todo,
  StoreState,
} from '../store/features/todosSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const App = () => {
  const dispatch = useAppDispatch();

  const onButtonClick = () => dispatch(fetchTodos);

  const todoList: StoreState = useAppSelector(
    (state) => state.todoList
  );

  console.log(todoList);
  // const renderList = (): JSX.Element => {
  //   return todoList.map((todo: Todo) => {
  //     return <div key={todo.id}>{todo.title}</div>;
  //   });
  // };

  return (
    <div>
      <button onClick={() => onButtonClick()}>Fetch!</button>
    </div>
  );
};
