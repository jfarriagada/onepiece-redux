/*
- Son funciones puras (Recibe args y no devuelve nada externo de lo que recibe)
- Reciben el estado actual y una acción
- Devuelve un nuevo estado
*/
function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      })
    default:
      return state;
  }
}

export default reducer
