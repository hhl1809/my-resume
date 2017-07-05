import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Public from 'material-ui/svg-icons/social/public';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import '../css/About.css';

var myAddress = "Ho Chi Minh, VN";
var myPhone = "+84 90 821 3698";
var myEmail = "hhl1809@gmail.com";
var myWebsite = "hocluan.io"

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    return (
      <ScrollableAnchor id={'aboutSection'}>
        <div className="About">
          <Paper className="sectionHeader" zDepth={2}>ABOUT ME</Paper>

          <Paper circle={true} className="Avartar" zDepth={5}>
            <Avatar size={300} src={require('../../../images/avatar.png')}/>
          </Paper>

          <Paper className="info" zDepth={1}>
            <Tabs inkBarStyle={{ backgroundColor: 'rgba(244, 67, 54, 1)' }}
              tabItemContainerStyle={{ backgroundColor: 'rgba(0, 150, 136, 0.7)' }}
              contentContainerClassName="infoTabs"
              onChange={this.handleChange}
              value={this.state.slideIndex}>
              <Tab label="SUMMARY" value={0}/>
              <Tab label="CONTACT INFO" value={1}/>
            </Tabs>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

              <div className="Summary">
                <p style={{textAlign: 'left',paddingRight:20, paddingLeft:20, color: 'rgba(158, 158, 158, 1)'}}>I'm <b style={{color: 'rgba(225, 78, 66, 1)'}}>Huynh Hoc Luan a System Administrator / iOS Developer</b> with 3 years of experience working with Linux System, AWS and 1 years of experience in iOS Swift technologies, with good knowledge of Material Design, Logical Thinking, Network, Linux Operator System, 7 OSI Models' layers.</p>
                <p style={{textAlign: 'left',paddingRight:20, paddingLeft:20, color: 'rgba(158, 158, 158, 1)'}}>Learning new technologies is what I am passionate about <b style={{color: 'rgba(225, 78, 66, 1)'}}>(I self-taught Switf about 2 months)</b>. In addition, I like to support other and tend to work-well within groups because I have a good talent in <b style={{color: 'rgba(225, 78, 66, 1)'}}>trouble-shoot problems</b>(in code, system, network....) </p>
                <Slider sliderStyle={{ marginBottom: 20}} style={{width: '90%', marginLeft: '50%', transform: 'translate(-50%, 0)'}} disabled={true} value={0.5} />

                <div className="pointField">
                  <div className="pointTitle">GOOD</div>
                  <div style={{display: 'flex', flexWrap: 'wrap',}}>
                    <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<CheckCircle />} />High sense of responsibility</Chip>
                    <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<CheckCircle />} />Funny</Chip>
                    <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<CheckCircle />} />Actively</Chip>
                    <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<CheckCircle />} />Hardworking</Chip>
                    <Chip className="goodPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(0, 188, 212, 1)" icon={<CheckCircle />} />Faithfully</Chip>
                  </div>
                </div>

                <div className="pointField">
                  <div className="pointTitle">BAD</div>
                  <div style={{display: 'flex', flexWrap: 'wrap',}}>
                    <Chip className="badPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(255, 87, 34, 1)" icon={<Cancel />} />English communication skill not good</Chip>
                    <Chip className="badPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(255, 87, 34, 1)" icon={<Cancel />} />Hot temper</Chip>
                    <Chip className="badPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(255, 87, 34, 1)" icon={<Cancel />} />Humanity</Chip>
                    <Chip className="badPoints" labelColor="white"><Avatar backgroundColor="rgba(255, 253, 231, 1)" color="rgba(255, 87, 34, 1)" icon={<Cancel />} />Forthright</Chip>
                  </div>
                </div>

              </div>

              <List className="infoList">
                <ListItem disabled={true} innerDivStyle={{letterSpacing: 3, textAlign: 'left', paddingLeft: 120, color: 'rgba(244, 67, 54, 1)'}} className="infoListItem" primaryText={myAddress} leftIcon={<LocationOn className="infoListItemIcon" />}/>
                <Divider />
                <ListItem disabled={true} innerDivStyle={{letterSpacing: 3, textAlign: 'left', paddingLeft: 120, color: 'rgba(244, 67, 54, 1)'}} className="infoListItem" primaryText={myEmail} leftIcon={<Email className="infoListItemIcon" />}/>
                <Divider />
                <ListItem disabled={true} innerDivStyle={{letterSpacing: 3, textAlign: 'left', paddingLeft: 120, color: 'rgba(244, 67, 54, 1)'}} className="infoListItem" primaryText={myPhone} leftIcon={<Phone className="infoListItemIcon" />}/>
                <Divider />
                <ListItem disabled={true} innerDivStyle={{letterSpacing: 3, textAlign: 'left', paddingLeft: 120, color: 'rgba(244, 67, 54, 1)'}} className="infoListItem" primaryText={myWebsite} leftIcon={<Public className="infoListItemIcon" />}/>
              </List>
            </SwipeableViews>
          </Paper>

        </div>
      </ScrollableAnchor>
    );
  }
}
