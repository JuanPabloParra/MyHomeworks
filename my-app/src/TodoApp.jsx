import { useTodos } from "./useReducer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const TodoApp = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
