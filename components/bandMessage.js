import React from 'react';

export  default class BandMessage extends React.Component {
  render() {
    return <div className='bandmessage'>
      {this.props.message.text}
    </div>
  }
}
