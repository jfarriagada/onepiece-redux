import React , { Component } from 'react';
import BandApp from './bandApp';
import ReactDOM from 'react-dom';

/*
BandApp tiene los components BandTable y BandChat dentro de un div
*/
export default class App extends Component {
// App principal donde se hace render de
//todos los Components
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <BandApp/>
      </div>
    )
  }

}
