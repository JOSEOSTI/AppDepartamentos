import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from 'Components/DashboardLayout';
import axios from 'axios';
import DetailProd from 'Components/DetailProp';
import Footer from 'Scenes/HomePage/Components/Footer';


class MyhousePage extends React.Component<RouteComponentProps<{ id: string }>, {}> {

  state = {
    propertie: []
  };
  componentDidMount() {
    var id = this.props.match.params.id;
    axios.get('http://localhost:9000/properties/' + id)
      .then(propertie => {

        this.setState({ propertie:propertie.data });
      });
  }

  render() {
    console.log("datos1", this.state.propertie);
    
    return (
      <div className="myhousePage">

        <Dashboard>
          {/* <div className="dashboardTitle">
            <h3>Property ({this.props.match.params.id})</h3>
          </div> */}
          <p></p>
          <br />
          <br />
          <br />
          <div className="myHouseWrapper">
         <DetailProd data={this.state.propertie} />  
           
             
         </div>
        
        </Dashboard>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MyhousePage;