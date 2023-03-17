import React, { useState } from "react";

const TodoItem = ({ todo }) => {
  return (
    <li>{todo.title}</li>
  );
};

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const TodoForm = ({ onNewTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewTodo({
      id: Date.now(),
      title,
    });
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todos={todos} />
      <TodoForm onNewTodo={handleNewTodo} />
    </div>
  );
};

export default TodoApp;