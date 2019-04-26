import React, { Component } from 'react';
import './clouds.css';

export class Clouds extends Component {
    render() {
        return (
        <div id="mainContent">
            <img id="bigCloud" className="cloud" height="154" width="238" src="https://www.kirupa.com/images/bigCloud.png" />
            <img id="smallCloud" className="cloud" height="103" width="158" src="https://www.kirupa.com/images/smallCloud.png" />
        </div>
     );
  }
}
