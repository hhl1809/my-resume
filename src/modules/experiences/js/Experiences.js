import React from 'react';
import Paper from 'material-ui/Paper';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Step, Stepper, StepLabel, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import RadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import '../css/Experiences.css';

export default class Experiences extends React.Component {
  state = {
    stepIndex: 0,
  };

  render() {
    const {stepIndex} = this.state;
    return(
      <ScrollableAnchor id={'experiencesSection'}>
      <div className="Experiences">
        <Paper className="sectionHeader" zDepth={2}>EXPERIENCES</Paper>

        <div>
          <Stepper activeStep={stepIndex} linear={false} orientation="vertical">
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
                <div className="jobDate">April, 2015 - Now</div>
              </StepButton>
              <StepContent>
                <Paper className="jobContent" zDepth={2}>
                  <div className="position">IT SYSTEM / IOS DEVELOPER</div>
                  <div className="companyName">JV-IT., JSC</div>
                  <List className="description">
                    <ListItem disabled={true}
                              innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                              primaryText="Troubleshoot LAN/ WAN performance, connectivity, and related network problems. Quickly diagnose and solve difficult technical problems as they occur."
                              leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                    <ListItem disabled={true}
                              innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                              primaryText="Manage services on Linux System like Web Service(Apache, Tomcat), Firewall, Mail Service(Postfix), Monitor Service(Nagios)..."
                              leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                    <ListItem disabled={true}
                              innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                              primaryText="Worked on Swift to develope outsource iOS app ."
                              leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                  <ListItem disabled={true}
                            innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                            primaryText="Worked on CoreData, UiKit, Collections, Design Patterns, Protocols, Delegates, CoreLocation for the Application."
                            leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                    <ListItem disabled={true}
                              innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                              primaryText="Fixed the crashes/bugs reported by QA."
                              leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                    <ListItem disabled={true}
                              innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                              primaryText="Worked with GIT to merge the code and pull changes on to the working branch.  "
                              leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                  </List>
                </Paper>
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                <div className="jobDate">December, 2012 - April, 2015 </div>
              </StepButton>
              <StepContent>
                <Paper className="jobContent" zDepth={2}>
                  <div className="position">IT OFFICER</div>
                  <div className="companyName">AAApharma Company</div>
                    <List className="description">
                      <ListItem disabled={true}
                                innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                                primaryText="Responsible for designing, organizing, modifying, and supporting a company's computer systems."
                                leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                      <ListItem disabled={true}
                                innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                                primaryText="Troubleshoot LAN/ WAN performance, connectivity, and related network problems. Quickly diagnose and solve difficult technical problems as they occur."
                                leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                      <ListItem disabled={true}
                                innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                                primaryText="Work with IT Manager and other key personnel to determine if changes in hardware or software configurations affect disaster recovery plan outcomes."
                                leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                      <ListItem disabled={true}
                                innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                                primaryText="Research new technology, and implement it."
                                leftIcon={<RadioButtonChecked color="rgba(244, 67, 54, 1)"/>}/>
                    </List>
                </Paper>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </div>
    </ScrollableAnchor>
    );
  }
}
