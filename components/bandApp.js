import React from 'react';
import BandTable from './bandTable';
import BandChat from './bandChat';
import uid from 'uid';

export default class BandApp extends React.Component {
  /* constructor(props) se ocupar cuando se va a renderizar
     uno de los components */
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  // update state de chat
  onPhase(name) {
    var text = `${name}, ${name} !!`;
    var message = { id: uid(),text: text };
    this.state.messages.push(message);
    var messages = this.state.messages;
    this.setState({ messages: messages });
  }

  render() {
    //  { name: 'Roronoa_Zoro', time: 'pasado'},
    var mugiwaras = [
      { name: 'Roronoa_Zoro' },
      { name: 'Sanji' },
      { name: 'Monkey_D._Luffy' },
      { name: 'Franky' }
    ];

    // se engloban los dos components en un div pata que retorne mas de uno
    return <div className='bandapp'>
      <BandTable mugiwaras={mugiwaras} onPhase={this.onPhase.bind(this)} />
      <BandChat messages={this.state.messages} />
    </div>
  }
}
