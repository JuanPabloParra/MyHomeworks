export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (!todos) return null;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
