import React from 'react';
import BandAvatar from './bandAvatar';

export default class BandRow extends React.Component {
  onClick(event){
    // pasamos una function phase a props
    this.props.phase.call(null, this.props.name)
  }

  render(){
    return <div className='bandrow' onClick={this.onClick.bind(this)} >
      <BandAvatar name={this.props.name} />
      {this.props.name}
    </div>
  }
}
