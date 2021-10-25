import * as React from 'react';
import './styles.css';
import { Images } from 'models/images';
import { ImagesApiService } from 'api/ImagesService';

interface IOwnState {
   imagenes: Images[];
  }
  
interface DetailProdProps {
    data:any;

}



class DetailProd extends React.Component<DetailProdProps, IOwnState> {
 
   
    constructor(props: DetailProdProps) {
        super(props)
        this.state = {
          imagenes: [],
        }
      }

      async componentDidMount() {
        const response = await ImagesApiService.getAllproperties();
        console.log("datos", response);
        this.setState({ imagenes: response.data })
      }
   
    render() {
        console.log("veri",this.state.imagenes);
        
        return (
            <div className="container listProperty">
                <div className="card" id="cardDetail">
                    <div className="container-fliud">
                        <div className="wrapper row listPropertyHeader">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                {this.state.imagenes.map(img =><div className="tab-pane active" id="pic-1"><img src={img.img_url} /></div> )}
                                {this.state.imagenes.map(img =><div className="tab-pane" id="pic-2"><img src={img.img_url} /></div>)}
                                    <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                                    
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a data-target="#pic-1" ><img src={this.props.data.img} /></a></li>
                                    <li><a data-target="#pic-2" ><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                </ul>
                               
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{this.props.data.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">{this.props.data.description}</p>
                                <h3 className="price">precio: <span>${this.props.data.price}</span></h3>
                                <p className="vote"><strong>DIRECCION : </strong>{this.props.data.address}</p>
                                <h5 className="sizes">Caracteristicas:</h5>
                                <p></p>
                                <p className="product-description" title="small">Habitaciones : {this.props.data.beds}   </p>
                                <p className="product-description" data-toggle="tooltip" title="medium">Baños : {this.props.data.toileds}</p>

                                {/* <h5 className="colors">colors:
                                <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                <span className="color green"></span>
                                <span className="color blue"></span>
                            </h5> */}
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">Rentar</button>
                                    <button className="like btn btn-default" type="button">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}

export default DetailProd;
