/*
- Representan un cambio en el estado
- Son objetos planos de javascript (POJO)
- Tienen un type y un payload
*/
let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      // Payload que es el texto que se ingresara en el input
      text: text
    }
  }
}

export default actions
//store.dispatch(addTodo('jasbsl'))
