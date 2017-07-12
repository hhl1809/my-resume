import React from 'react';
import Paper from 'material-ui/Paper';
import ScrollableAnchor from 'react-scrollable-anchor';
import {List, ListItem} from 'material-ui/List';
import Done from 'material-ui/svg-icons/action/done';
import Divider from 'material-ui/Divider';
import '../css/Education.css';


export default class Education extends React.Component {
  render() {
    return(
      <ScrollableAnchor id={'educationSection'}>
      <div className="Education">
        <Paper className="sectionHeader" zDepth={2}>EDUCATION</Paper>

        <Paper className="educationField" zDepth={1}>
          <Paper rounded={false} className="borderTimeField" zDepth={0} circle={true}>
            <Paper className="timeField" zDepth={2} circle={true}>
              <div className="timeLabel">
                <p>2008</p>
                <p>-</p>
                <p>2012</p>
              </div>
            </Paper>
          </Paper>

          <div className="educationContent">
            <div className="degree">BACHELOR DEGREE</div>
            <div className="school">University of Science, VietNam</div>
            <List className="listEducationContent">
              <ListItem disabled={true}
                        className="listItemEducationContent"
                        primaryText="Major: Math & Computer Science"
                        innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 70}}
                        leftIcon={<Done color="rgba(0, 188, 212, 1)"/>} />
              <ListItem disabled={true}
                        className="listItemEducationContent"
                        innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 70}}
                        primaryText="GPA: 7.62"
                        leftIcon={<Done color="rgba(0, 188, 212, 1)"/>} />
              <ListItem disabled={true}
                        className="listItemEducationContent"
                        innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 70}}
                        primaryText="Rank: Good"
                        leftIcon={<Done color="rgba(0, 188, 212, 1)"/>} />
            </List>
            <Divider style={{width: '80%', marginLeft: '50%', transform: 'translate(-50%, 0)'}} />
          </div>

          <div className="educationContent" style={{marginTop: 20}}>
            <div className="cert">MCSA CERTIFICATE</div>
            <div className="certDate">March, 2011</div>
            <div className="certDesc">Windows Server 2003 Systems Administrator</div>
          </div>

          <Divider style={{width: '80%', marginLeft: '50%', transform: 'translate(-50%, 0)'}} />


          <div className="educationContent" style={{marginTop: 20}}>
            <div className="cert">LPI 1 - 2 CERTIFICATE</div>
            <div className="certDate">February, 2012</div>
            <div className="certDesc">Linux Network Administrator</div>
          </div>

        </Paper>
      </div>
    </ScrollableAnchor>
    );
  }
}
