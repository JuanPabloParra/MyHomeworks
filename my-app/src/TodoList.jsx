import React from 'react'

const TodoList = ({ todos, dispatchTodo }) => {
  const handleDeleteClick = (id) => {
    dispatchTodo({
      type: 'DELETE_TODO',
      payload: {
        id: id
      }
    })
  }

  const handleToggleClick = (id) => {
    dispatchTodo({
      type: 'TOGGLE_TODO',
      payload: {
        id: id
      }
    })
  }

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className={`list-group-item ${todo.done ? 'list-group-item-success' : ''}`}>
          <div className="d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            <div>
              <button className="btn btn-outline-success mx-1" onClick={() => handleToggleClick(todo.id)}>Completado</button>
              <button className="btn btn-outline-danger" onClick={() => handleDeleteClick(todo.id)}>Borrar</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
