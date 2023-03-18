import React from 'react'

const TodoForm = ({ handleInputChange, handleFormSubmit, newTodo }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Nueva tarea..."
        value={newTodo}
        onChange={handleInputChange}
      />
      <button 
        type="submit" 
        className="btn btn-primary mt-2"
        disabled={newTodo.trim().length === 0}
      >
        Agregar
      </button>
    </form>
  )
}

export default TodoForm
