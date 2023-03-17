import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
