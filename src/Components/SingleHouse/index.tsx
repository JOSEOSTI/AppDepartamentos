import { ImagesApiService } from 'api/ImagesService';
import * as React from 'react';
import './style.css';

interface SingleHouseProps {
  data: any;
}



class SingleHouse extends React.Component<SingleHouseProps, {} > {
  state = {
    imagen: []
  }

  async componentDidMount() {
    const response = await ImagesApiService.getImageById(this.props.data.id_img);
    console.log("ima", response);
    
    this.setState({ imagen: response.data })
  }


  render() {

    return (
      <div className="singleHouse">
        <a href={'/property/' + this.props.data.id_prop} className="card">
          <div className="figure">
       
          {/* {this.state.imagen.map(dato=> <img src= {dato.img_url}alt="image" />)} */}
            <div className="figCaption">
              <div>$ {this.props.data.price}</div>
              <span className="icon-eye"> 200</span>
              <span className="icon-heart"> 200</span>
              <span className="icon-bubble"> 200</span>
            </div>
            <div className="figView"><span className="icon-eye" /></div>
            <div className="figType">RENTAR</div>
          </div>
          <h2>{this.props.data.name}</h2>
          <div className="cardAddress"><span className="icon-pointer" />
            {this.props.data.address}
            </div>
          <ul className="cardFeat">
            <li><span className="fa fa-moon-o" /> {this.props.data.beds}</li>
            <li><span className="icon-drop" /> {this.props.data.toilets}</li>
            <li><span className="icon-frame" /> {this.props.data.square} Sq Ft</li>
          </ul>
        </a>
      </div>
    );
  }
}

export default SingleHouse;