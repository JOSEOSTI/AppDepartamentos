import * as React from 'react';
import './style.css';
import SingelHouse from 'Components/SingleHouse';
import { Properties } from 'models/properties';
import { PropertieApiService } from 'api/PropertiesService';
// const houseData = [{
//   name: 'Modern Residence in New York',
//   address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
// }, {
//   name: 'Hauntingly Beautiful Estate',
//   address: ' 169 Warren St, Brooklyn, NY 11201, USA',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
// }, {
//   name: 'Modern Residence in New York',
//   address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
// }, {
//   name: 'Hauntingly Beautiful Estate',
//   address: ' 169 Warren St, Brooklyn, NY 11201, USA',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
// }, {
//   name: 'Modern Residence in New York',
//   address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
// }, {
//   name: 'Hauntingly Beautiful Estate',
//   address: ' 169 Warren St, Brooklyn, NY 11201, USA',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
// }];






interface IOwnProps {
  // handleDelete: (id: number) => (e: React.MouseEvent) => void;
  // handleEdit: (id: number) => (e: React.MouseEvent) =>  void;
}

interface IOwnState {
  propertie: Properties[];
}

class ListProperty extends React.Component<IOwnProps, IOwnState>{
  constructor(props: IOwnProps) {
    super(props)
    this.state = {
      propertie: [],
    }
  }

  async componentDidMount() {
    const response = await PropertieApiService.getAllproperties();
    this.setState({ propertie: response.data })
  }

  render() {    
    const { propertie } = this.state        
    return (
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <h3>Propiedades listadas recientemente</h3>
          <h5>Tu hogar ó tu Automovil a tan solo un clic </h5>
        </div>
        <div className="row listPropertyContent">
          {
            propertie.map((data, index) => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                  <SingelHouse data={data} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListProperty;