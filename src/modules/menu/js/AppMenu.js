import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Work from 'material-ui/svg-icons/action/work';
import School from 'material-ui/svg-icons/social/school';
import Home from 'material-ui/svg-icons/action/home';
import Person from 'material-ui/svg-icons/social/person';
import LinearScale from 'material-ui/svg-icons/editor/linear-scale';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FontIcon from 'material-ui/FontIcon';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { removeHash } from 'react-scrollable-anchor';
import '../css/AppMenu.css';

export default class AppMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  handleToggle = () => this.setState({open: !this.state.open});

  // handleClose = () => this.setState({open: false});
  handleClose() { removeHash(); this.setState({open: false}); }

  render() {
    return (
      <div className="AppMenu">
        <IconButton className="AppMenuBtn" onTouchTap={this.handleToggle}>
          <MenuIcon className="AppMenuIcon"/>
        </IconButton>

        <Drawer docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          containerClassName="AppMenuBody">
          <AppBar iconElementLeft={<IconButton><NavigationClose /></IconButton>} title="Welcome" className="AppBar" onLeftIconButtonTouchTap={this.handleClose.bind(this)}/>
          <Menu className="MenuWrap">
            <Divider />
            <a href='#homeSection'>
              <MenuItem className="MenuItem" onTouchTap={this.handleClose.bind(this)} leftIcon={<Home />} primaryText="Home"/>
            </a>
            <Divider />
            <a href='#aboutSection'>
              <MenuItem className="MenuItem" onTouchTap={this.handleClose.bind(this)} leftIcon={<Person />} primaryText="About"/>
            </a>
            <Divider />
            <a href='#skillSection'>
              <MenuItem className="MenuItem" onTouchTap={this.handleClose.bind(this)} leftIcon={<LinearScale />} primaryText="Skills"/>
            </a>
            <Divider />
            <a href='#experiencesSection'>
              <MenuItem className="MenuItem" onTouchTap={this.handleClose.bind(this)} leftIcon={<Work />} primaryText="Experiences"/>
            </a>
            <Divider />
            <a href='#educationSection'>
              <MenuItem className="MenuItem" onTouchTap={this.handleClose.bind(this)} leftIcon={<School />} primaryText="Education"/>
            </a>
            <Divider />
          </Menu>
        </Drawer>
      </div>
    );
  }
}
