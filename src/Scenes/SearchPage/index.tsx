import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from 'Components/DashboardLayout';
import SearchForm from './Components/SearchForm';
interface dataSearch {
  data:any
}
class SearchPage extends React.Component<RouteComponentProps<dataSearch>, {}> {
  
  render() {
    console.log(this.props.match.params);
    
    return (
      <div className="searchPage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Filter your result</h3>
          </div>
          <div className="searchFormWrapper">
            <SearchForm  data ={this.props.match.params}/>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default SearchPage;