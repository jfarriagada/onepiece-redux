import React from 'react';

export default class BandAvatar extends React.Component{
  render(){
    var url = `http://www.pirateking.es/personajes/${this.props.name}.jpg`;
    return <img src={url} className="avatar" width="100" height="100" />
  }
}

//export default bandAvatar;
// className='' < para css
