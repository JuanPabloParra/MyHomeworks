import React, { useReducer, useState } from 'react'
import { TodoReducer } from './TodoReducer'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const initialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}]

const TodoApp = () =>{
  const [todos, dispatchTodo] = useReducer (TodoReducer, initialState)
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatchTodo({
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        description: newTodo,
        done: false
      }
    })
    setNewTodo('')
  }

  return(
    <>
      <TodoHeader countTodos={todos.length} countPendingTodos={todos.filter(todo => !todo.done).length} />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} dispatchTodo={dispatchTodo} />
        </div>
        <div className="col-5">
          <TodoForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} newTodo={newTodo} />
        </div>
      </div>
    </>
  )
}

export default TodoApp;
