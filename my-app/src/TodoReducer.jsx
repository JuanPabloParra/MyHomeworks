export const TodoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id)
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo)
    default:
      return state
  }
}
