import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../css/Home.css';

export default class Home extends React.Component {
  render() {
    return(
      <ScrollableAnchor id={'homeSection'}>
      <div className="Home">
        <div className="homeLayer">
          <div className="infoField">
            <div className="nameField">HUYNH HOC LUAN</div>
            <hr />
            <div className="positionField">System Engineer / iOS Developer</div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
    );
  }
}
