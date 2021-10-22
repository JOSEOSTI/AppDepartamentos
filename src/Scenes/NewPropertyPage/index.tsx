import * as React from 'react';
import './style.css';
import { Link, RouteComponentProps } from 'react-router-dom';
import SellPage from './Components/Sell';
import RentPage from './Components/Rent';
import RenovationPage from './Components/Renovation';
import AddNewPropertyForm from './Components/AddNewPropertyForm';
import LeftSide from 'Components/DashboardLayout/Components/LeftSide';
import { Icon } from 'react-fa';
import SearchForm from 'Components/DashboardLayout/Components/Header/Components/SearchForm';
import UserMenu from 'Components/UserMenu';
import NotifyMenu from 'Components/DashboardLayout/Components/Header/Components/NotifyMenu';


interface DashboardState {
  isExpand: boolean;
}

class NewPropertyPage extends React.Component<RouteComponentProps<{action: string}>, DashboardState> {
  newPropertyAction: {
    sell: JSX.Element;
    rent: JSX.Element;
    renovation: JSX.Element;
    default: JSX.Element;
  };
  constructor() {
    super();
    this.state = {
      isExpand: false
    };
    this.newPropertyAction = {
      sell: <SellPage />,
      rent: <RentPage />,
      renovation: <RenovationPage />,
      default: <AddNewPropertyForm />
    };
  }
  matchAction = () => {
    const section = this.props.match.params.action;
    switch (section) {
      case 'sell':
        return this.newPropertyAction.sell;
      case 'rent':
        return this.newPropertyAction.rent;
      case 'renovation':
        return this.newPropertyAction.renovation;
      default:
        return this.newPropertyAction.default;
    }
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
      <div className="infoPage">
         <div className="logo">
          <Link to="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </Link>
        </div>
        <a href="#" className="navHandler" ><Icon name="bars" /></a>
        <SearchForm />
        <div className="userMenuWrapper">
          <UserMenu />
        </div>
        <NotifyMenu />
 
       <br /><br />
       <br />
        <div className="bodyWrapper">
          <LeftSide isExpand={this.state.isExpand} />
          <div
            className={'contentWrapper' + (this.state.isExpand ? ' smallSize' : '')}
            onClick={this.clickOutsideLeftSide}
          >
            {this.props.children}
          </div>
        </div>
      
      
      <div className="infoWrapper">
        {this.matchAction()}
      </div>
      </div>
    );
  }
}

export default NewPropertyPage;