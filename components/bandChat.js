import React from 'react';
import BandMessage from './bandMessage';

export default class BandChat extends React.Component {
  render() {
    return <div className='bandchat large-4 medium-4 columns end' >
      {
        this.props.messages.map((message) => {
            return <BandMessage key={message.id} message={message} />
        })
      }
    </div>
  }
}

BandChat.defaultProps = { message: [] };
