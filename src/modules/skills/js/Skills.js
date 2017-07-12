import React from 'react';
import Paper from 'material-ui/Paper';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import Chip from 'material-ui/Chip';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import IconButton from 'material-ui/IconButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Done from 'material-ui/svg-icons/action/done';
import Code from 'material-ui/svg-icons/action/code';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import '../css/Skills.css';

var ForeignLanguegeLevels = React.createClass({
  render() {
    return(
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn style={this.props.firstColumnWidth}>
              <Chip className="langLabel" labelColor="gray">{this.props.label}</Chip>
            </TableRowColumn>
            <TableRowColumn>
              <Stepper linear={false}  style={{height: 20}} activeStep={this.props.level}>
                <Step>
                  <StepLabel>Beginner</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Basic</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Intermediate</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Advanced</StepLabel>
                </Step>
              </Stepper>
            </TableRowColumn>
          </TableRow>
        </TableBody>
    </Table>
    );
  }
});

var Levels = React.createClass({
  render() {
    return(
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn style={this.props.firstColumnWidth}>
            <Chip className="techLabel" style={this.props.chipColor} labelColor="white">{this.props.label}</Chip>
          </TableRowColumn>
          <TableRowColumn>
            <Stepper linear={false}  style={{height: 20}} activeStep={this.props.level}>
              <Step>
                <StepLabel>Fresher</StepLabel>
              </Step>
              <Step>
                <StepLabel>Junior</StepLabel>
              </Step>
              <Step>
                <StepLabel>Specialist</StepLabel>
              </Step>
              <Step>
                <StepLabel>Senior</StepLabel>
              </Step>
              <Step>
                <StepLabel>Technical Lead</StepLabel>
              </Step>
              <Step>
                <StepLabel>Expert</StepLabel>
              </Step>
            </Stepper>
          </TableRowColumn>
        </TableRow>
      </TableBody>
  </Table>
    );
  }
});

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex1: 0,
      slideIndex2: 0
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex1: value});
  };

  handleNext = () => {
    this.setState({slideIndex2: this.state.slideIndex2+1});
  };

  handlePrev = () => {
    this.setState({slideIndex2: this.state.slideIndex2-1});
  };

  render() {
    return(
      <ScrollableAnchor id={'skillSection'}>
      <div className="Skills">
        <Paper className="sectionHeader" zDepth={2}>SKILLS</Paper>

        <SwipeableViews className="skillInfo" index={this.state.slideIndex2} onChangeIndex={this.handleNext}>
          <div>
            <Paper className="programmingLanguagesField" zDepth={1}>
              <div className="skillHeader">PROGRAMMING LANGUAGE</div>
              <Levels label="Swift" level={1} firstColumnWidth={{width: 85}} chipColor={{backgroundColor: 'rgba(244, 67, 54, 0.8)'}}/>
              <Levels label="ReactJS" level={0} firstColumnWidth={{width: 85}} chipColor={{backgroundColor: 'rgba(244, 67, 54, 0.8)'}}/>
              <Levels label="Javascript" level={1} firstColumnWidth={{width: 85}} chipColor={{backgroundColor: 'rgba(244, 67, 54, 0.8)'}}/>
              <Levels label="HTML / CSS" level={2} firstColumnWidth={{width: 85}} chipColor={{backgroundColor: 'rgba(244, 67, 54, 0.8)'}}/>
            </Paper>

            <Paper className="foreignLanguageField" zDepth={1}>
              <div className="skillHeader">FOREIGN LANGUAGE</div>
              <Tabs inkBarStyle={{ backgroundColor: 'rgba(244, 67, 54, 1)' }}
                tabItemContainerStyle={{ backgroundColor: 'rgba(0, 150, 136, 0.7)', marginTop: 10}}
                onChange={this.handleChange}
                value={this.state.slideIndex1}>
                <Tab label="English" value={0}/>
                <Tab label="Chinese(Cantonese)" value={1}/>
              </Tabs>
              <SwipeableViews index={this.state.slideIndex1} onChangeIndex={this.handleChange}>
                <div>
                  <ForeignLanguegeLevels label="Reading" level={2} firstColumnWidth={{width: 60}}/>
                  <ForeignLanguegeLevels label="Writing" level={2} firstColumnWidth={{width: 60}}/>
                  <ForeignLanguegeLevels label="Listening" level={2} firstColumnWidth={{width: 60}}/>
                  <ForeignLanguegeLevels label="Speaking" level={1} firstColumnWidth={{width: 60}}/>
                </div>
                <div>
                  <ForeignLanguegeLevels label="Reading" level={0} firstColumnWidth={{width: 60}}/>
                  <ForeignLanguegeLevels label="Writing" level={0} firstColumnWidth={{width: 60}}/>
                  <ForeignLanguegeLevels label="Listening" level={3} firstColumnWidth={{width: 60}}/>
                  <ForeignLanguegeLevels label="Speaking" level={3} firstColumnWidth={{width: 60}}/>
                </div>
              </SwipeableViews>
            </Paper>

            <IconButton className="nextBtnCol1" onTouchTap={this.handleNext}>
              <ChevronRight className="nextBtnIcon"/>
            </IconButton>
          </div>

          <div>
            <Paper className="frameworkField" zDepth={1}>
              <div className="skillHeader">FRAMEWORKS & PLATFORMS</div>
              <Levels label="FacebookSDK" level={1} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(0, 150, 136, 1)'}}/>
              <Levels label="GoogleMapsSDK for iOS" level={2} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(0, 150, 136, 1)'}}/>
              <Levels label="YouTube Data API" level={1} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(0, 150, 136, 1)'}}/>
              <Levels label="Wordpress" level={2} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(0, 150, 136, 1)'}}/>
              <Levels label="Bootstrap" level={1} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(0, 150, 136, 1)'}}/>
              <Levels label="Material-UI" level={2} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(0, 150, 136, 1)'}}/>
            </Paper>

            <Paper className="manageField" zDepth={1}>
              <div className="skillHeader">DEPLOY & MANAGE</div>
              <Levels label="Linux System & Services" level={3} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(103, 58, 183, 0.8)'}}/>
              <Levels label="Window System & Services" level={2} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(103, 58, 183, 0.8)'}}/>
              <Levels label="AWS Cloud Computing" level={3} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(103, 58, 183, 0.8)'}}/>
              <Levels label="Docker Platform" level={2} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(103, 58, 183, 0.8)'}}/>
            </Paper>

            <IconButton className="nextBtnCol2" onTouchTap={this.handleNext}>
              <ChevronRight className="nextBtnIcon"/>
            </IconButton>
            <IconButton className="prevBtnCol2" onTouchTap={this.handlePrev}>
              <ChevronLeft className="prevBtnIcon"/>
            </IconButton>
          </div>

          <div>
            <Paper className="versionControlField" zDepth={1}>
              <div className="skillHeader">VERSION CONTROL</div>
              <Levels label="GitLab / GitHub (SourceTree)" level={1} firstColumnWidth={{width: 190}} chipColor={{backgroundColor: 'rgba(244, 67, 54, 0.8)'}}/>
            </Paper>

            <Paper className="knowledgeField" zDepth={1}>
              <div className="skillHeader">KNOWLEDGE</div>
              <List className="knowledgeList">
                <ListItem disabled={true}
                          primaryText="Good knowledge in System Center Operations Manager."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
                <ListItem disabled={true}
                          primaryText="Thorough knowledge in Windows 2003/2008 and Linux(CentOS) networking environment."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
               <ListItem  disabled={true}
                          primaryText="Fully proficient at LAN, WAN, and Wireless building, cable installation and testing."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
                <ListItem disabled={true}
                          primaryText="Configuration and Managing of Servers and Workstations."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
               <ListItem  disabled={true}
                          primaryText="Good troubleshooting skills."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
                <ListItem disabled={true}
                          primaryText="Good understanding about OOP, Design Pattern, Logical Thinking."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
             </List>
            </Paper>

            <Paper className="ideField" zDepth={1}>
              <div className="skillHeader">IDE</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Atom</Chip>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Sublime Text</Chip>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Nodepad++</Chip>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Xcode</Chip>
            </div>
            </Paper>

            <IconButton className="prevBtnCol3" onTouchTap={this.handlePrev}>
              <ChevronLeft className="prevBtnIcon"/>
            </IconButton>
          </div>
        </SwipeableViews>

        <div className="skillInfo-responsive">
            <Paper className="programmingLanguagesField" zDepth={1}>
              <div className="skillHeader">PROGRAMMING LANGUAGE</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="programmingLanguagesField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(244, 67, 54, 0.8)" icon={<CheckCircle />} />Swift</Chip>
                <Chip className="programmingLanguagesField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(244, 67, 54, 0.8)" icon={<CheckCircle />} />ReactJS</Chip>
                <Chip className="programmingLanguagesField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(244, 67, 54, 0.8)" icon={<CheckCircle />} />Javascript</Chip>
                <Chip className="programmingLanguagesField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(244, 67, 54, 0.8)" icon={<CheckCircle />} />Hardworking</Chip>
                <Chip className="programmingLanguagesField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(244, 67, 54, 0.8)" icon={<CheckCircle />} />HTML / CSS</Chip>
              </div>
            </Paper>

            <Paper className="foreignLanguageField" zDepth={1}>
              <div className="skillHeader">FOREIGN LANGUAGE</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="foreignLanguageField-responsive-item" labelColor="gray"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(205, 220, 57, 0.7)" icon={<CheckCircle />} />English</Chip>
                <Chip className="foreignLanguageField-responsive-item" labelColor="gray"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(205, 220, 57, 0.7)" icon={<CheckCircle />} />Chinese(Cantonese)</Chip>
              </div>
            </Paper>

            <Paper className="frameworkField" zDepth={1}>
              <div className="skillHeader">FRAMEWORKS & PLATFORMS</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="frameworkField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 150, 136, 1)" icon={<CheckCircle />} />FacebookSDK</Chip>
                <Chip className="frameworkField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 150, 136, 1)" icon={<CheckCircle />} />GoogleMapsSDK for iOS</Chip>
                <Chip className="frameworkField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 150, 136, 1)" icon={<CheckCircle />} />YouTube Data API</Chip>
                <Chip className="frameworkField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 150, 136, 1)" icon={<CheckCircle />} />Wordpress</Chip>
                <Chip className="frameworkField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 150, 136, 1)" icon={<CheckCircle />} />Bootstrap</Chip>
                <Chip className="frameworkField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 150, 136, 1)" icon={<CheckCircle />} />Material-UI</Chip>
              </div>
            </Paper>

            <Paper className="manageField" zDepth={1}>
              <div className="skillHeader">DEPLOY & MANAGE</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="manageField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(103, 58, 183, 0.8)" icon={<CheckCircle />} />Linux System & Services</Chip>
                <Chip className="manageField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(103, 58, 183, 0.8)" icon={<CheckCircle />} />Window System & Services</Chip>
                <Chip className="manageField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(103, 58, 183, 0.8)" icon={<CheckCircle />} />AWS Cloud Computing</Chip>
                <Chip className="manageField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(103, 58, 183, 0.8)" icon={<CheckCircle />} />Docker Platform</Chip>
              </div>
            </Paper>

            <Paper className="versionControlField" zDepth={1}>
              <div className="skillHeader">VERSION CONTROL</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="versionControlField-responsive-item" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(244, 67, 54, 0.8)" icon={<CheckCircle />} />GitLab / GitHub (SourceTree)</Chip>
              </div>
            </Paper>

            <Paper className="knowledgeField" zDepth={1}>
              <div className="skillHeader">KNOWLEDGE</div>
              <List className="knowledgeList">
                <ListItem disabled={true}
                          primaryText="Good knowledge in System Center Operations Manager."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
                <ListItem disabled={true}
                          primaryText="Thorough knowledge in Windows 2003/2008 and Linux(CentOS) networking environment."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
               <ListItem  disabled={true}
                          primaryText="Fully proficient at LAN, WAN, and Wireless building, cable installation and testing."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
                <ListItem disabled={true}
                          primaryText="Configuration and Managing of Servers and Workstations."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
               <ListItem  disabled={true}
                          primaryText="Good troubleshooting skills."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
                <ListItem disabled={true}
                          primaryText="Good understanding about OOP, Design Pattern, Logical Thinking."
                          innerDivStyle={{textAlign: 'left', paddingBottom: 0, paddingLeft: 50, color: 'rgba(66, 66, 66, 1)'}}
                          className="knowledgeListItem"
                          leftIcon={<Done color="rgba(0, 188, 212, 1)" className="knowledgeListItemIcon"/>} />
             </List>
            </Paper>

            <Paper className="ideField" zDepth={1}>
              <div className="skillHeader">IDE</div>
              <div style={{display: 'flex', flexWrap: 'wrap',}}>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Atom</Chip>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Sublime Text</Chip>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Nodepad++</Chip>
                <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<Code />} />Xcode</Chip>
            </div>
            </Paper>
        </div>

      </div>
    </ScrollableAnchor>
    );
  }
}
