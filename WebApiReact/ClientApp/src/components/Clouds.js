import React, { Component } from 'react';
import './clouds.css';
import bigCloud from '../images/bigCloud.png';
import smallCloud from '../images/smallCloud.png';

export class Clouds extends Component {
    render() {
        return (
        <div id="mainContent">
            <img id="bigCloud" className="cloud" height="154" width="238" src={bigCloud} />
            <img id="smallCloud" className="cloud" height="103" width="158" src={smallCloud} />
        </div>
     );
  }
}
