import { useReducer, useState } from 'react';
import { TodoReducer } from './TodoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false,
  },
];

const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatchTodo({
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        description: newTodo,
        done: false,
      },
    });
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: 'DELETE_TODO',
      payload: {
        id,
      },
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: 'TOGGLE_TODO',
      payload: {
        id,
      },
    });
  };

  const countTodos = todos.length;
  const countPendingTodos = todos.filter((todo) => !todo.done).length;

  return { todos, newTodo, handleInputChange, handleFormSubmit, handleDeleteTodo, handleToggleTodo, countTodos, countPendingTodos };
};

export default useTodo;
