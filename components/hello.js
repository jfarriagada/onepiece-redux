import React from 'react';

export default class HelloComponent extends React.Component {
  render(){
    return <div className='hello large-7 columns end large-offset-2'>
       <h4> React + ES6 + Webpack + Foundation: {this.props.name} !! </h4>
       </div>
  }
}
