/*
- Lugar donde se almacenan los datos
- Solo se guardan datos serializables
- Es inmutable (no puede ser cambiado o alterado)
- Solo hay uno por app
*/
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducers, initialState)
}
