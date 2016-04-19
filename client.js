import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

// definir el initialState o estado inicial
/*let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}

// definir el store
let store = configureStore(initialState)
*/
// definir el Component principal
render(
    <App/>,
  document.getElementById('container-mugiwara')
)
