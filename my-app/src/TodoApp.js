import React, { useReducer } from "react";
import TodoHeader from "./TodoHeader";
import TodoCounter from "./TodoCounter";
import TodoMain from "./TodoMain";
import todoReducer from "./todoReducer";

const initialState = {
  todos: [],
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const deleteTodo = (todoId) => {
    dispatch({ type: "DELETE_TODO", payload: todoId });
  };

  const toggleTodo = (todoId) => {
    dispatch({ type: "TOGGLE_TODO", payload: todoId });
  };

  const countTodos = state.todos.length;

  const countPendingTodos = state.todos.filter((todo) => !todo.completed)
    .length;

  return (
    <div>
      <TodoHeader onNewTodo={addTodo} />
      <TodoCounter countTodos={countTodos} countPendingTodos={countPendingTodos} />
      <TodoMain
        todos={state.todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
};

export default TodoApp;
