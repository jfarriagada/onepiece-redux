import React from 'react';
import BandApp from './components/bandApp';
import HelloComponent from './components/hello';
import ReactDOM from 'react-dom';

/*
BandApp tiene los components BandTable y BandChat dentro de un div
*/
ReactDOM.render(
  <BandApp />,
  document.getElementById('container-mugiwara')
);

ReactDOM.render(<HelloComponent name="farriagada" />, document.getElementById("container"));

setTimeout(() => {
  ReactDOM.render(<HelloComponent name="pancho" />, document.getElementById("container"));
},3000)
