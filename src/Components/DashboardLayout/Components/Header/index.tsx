import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import UserMenu from 'Components/UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide';

interface HeaderProps {
  clickToggle: Function;
}



interface DashboardState {
  isExpand: boolean;
}


class Header extends React.Component<HeaderProps, DashboardState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isExpand: false
    };
  }


  toggleLeftSide = () => {
    this.setState({
      isExpand: !this.state.isExpand
    });
  }
  clickOutsideLeftSide = () => {
    if (this.state.isExpand) {
      this.toggleLeftSide();
    }
  }
  render() {
    return (
      <div className="dashboardHeader">
        <div className="logo">
          <Link to="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </Link>
        </div>
        <a href="#" className="navHandler" onClick={(e) => this.props.clickToggle()}><Icon name="bars" /></a>
        <SearchForm />
        <div className="userMenuWrapper">
          <UserMenu />
        </div>
        <NotifyMenu />
        <div className="clearfix" />
        <div className="bodyWrapper">
          <LeftSide isExpand={this.state.isExpand} />
          <div
            className={'contentWrapper' + (this.state.isExpand ? ' smallSize' : '')}
            onClick={this.clickOutsideLeftSide}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;