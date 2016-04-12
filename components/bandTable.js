import React from 'react';
import BandRow from './bandRow';

export default class BandTable extends React.Component {
  render(){
    return <div className='bandtable large-3 medium-3 columns large-offset-2'>
      {
        this.props.mugiwaras.map((mugiwara) => {
            return <BandRow
               key={mugiwara.name}
               name={mugiwara.name}
               phase={this.props.onPhase} />
        })
      }
    </div>
  }
}
