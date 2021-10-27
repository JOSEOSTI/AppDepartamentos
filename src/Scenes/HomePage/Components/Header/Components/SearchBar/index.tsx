// tslint:disable-next-line:max-line-length
import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import SelectComponent from 'Components/SelectComponent';
import { connect } from 'react-redux';
import { getTranslation, SupportedLanguage } from 'Services/Geo';
// import { PropertieApiService } from 'api/PropertiesService';
import { Properties } from 'models/properties';
// import { PropertieApiService } from 'api/PropertiesService';

// import SearchForm from 'Scenes/SearchPage/Components/SearchForm';

const mapStateToProps = (state: any) => ({
  lang: state.status.lang,
  isPersist: state.status.isPersist
});

interface SearchBarProps {
  lang: SupportedLanguage;
  isPersist: boolean;
}

interface SelectBarState {
  isAdvance:any;
  searchP: Properties[];
  items: any,
  city: string,
  beds:number[],
  listBed: string[];
  listBath: string[];
  priceD:string,
  error:boolean
}

class SearchBar extends React.Component<SearchBarProps, SelectBarState> {
 
  
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      isAdvance: [],
      searchP: [],
      items: [],
      city: '',
      beds:[],
      listBath:[],
      listBed:[],
      priceD:'',
      error: false,

    };
  }

  toggleAdvSearch = () => {
    this.setState({
      isAdvance: !this.state.isAdvance
    });
  }
  handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ city: ev.target.value    });

  };

  // async componentDidMount() {
   
  //   const response = await PropertieApiService.getAllproperties();
  //   console.log("rest", response);
  //   this.setState({ searchP: response.data })
  // }

  handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const { city} = this.state;

    if (!city) return;

    // this.setState({ loading: true, inputValue: '' });

    fetch(`http://localhost:9000/properties/search/"${city}"`)
      .then(response => response.json())
      .then(data => {
        console.log("--", data);
        this.setState({
          searchP: data
        });
      })
    .catch(() => {
      this.setState({ error: true });
    });
  };
 

  render() {    


    const { city  } = this.state;
    if (!this.props.isPersist) {
      return (null);
    }
    const listBed = [
      getTranslation(this.props.lang, 'Dormitorios'),
      '1',
      '2',
      '3',
      '4'
    ];
    const listBath = [
      getTranslation(this.props.lang, 'Baños'),
      '1',
      '2',
      '3',
      '4'
    ];

console.log("dataa", this.state.searchP);

    return (
      <div className="search-panel">
       
        <form className="form-inline" onSubmit={this.handleSubmit } action={"/search"} method="POST" role="form" >
          <div className="form-group">
            <input
              style={{ textTransform: 'uppercase' }}
              type="text "
              className="form-control"
              id="city"
              value={city}
              onChange={this.handleChange}
              placeholder={getTranslation(this.props.lang, 'Ciudad')}
            />
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <SelectComponent switchTop={true} listItem={listBed}>
              {getTranslation(this.props.lang, 'Dormitorios')}
            </SelectComponent>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <SelectComponent switchTop={true} listItem={listBath}>
              {getTranslation(this.props.lang, 'Baños')}
            </SelectComponent>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input
                className="form-control price"
                type="number"
                placeholder={getTranslation(this.props.lang, 'Desde')}
                name="priceD"

              />
            </div>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input
                className="form-control price"
                type="number"
                placeholder={getTranslation(this.props.lang, 'Hasta')}
              />
            </div>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="checkbox custom-checkbox">
              <label>
                <input type="checkbox" />
                <Icon name="check" /> {getTranslation(this.props.lang, 'En alquiler')}</label>
            </div>
          </div>
          <div className={`form-group${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="checkbox custom-checkbox"><label>
              <input type="checkbox" /><Icon name="check" /> {getTranslation(this.props.lang, 'En venta')} </label>
            </div>
          </div>
          <div className="form-group">
            {/* <Link to="/search" className="btn btn-green isThemeBtn">{getTranslation(this.props.lang, 'Buscar')}</Link> */}
            <button type="submit" className="btn btn-primary">{getTranslation(this.props.lang, 'Buscar')}</button>
            <a
              href="#"
              className={`btn btn-o btn-white pull-right visible-xs${this.state.isAdvance ? ' advBtnActive' : ''}`}
              onClick={this.toggleAdvSearch}
            >
              {getTranslation(this.props.lang, 'Advance Search')}
              <Icon name={`${this.state.isAdvance ? 'angle-down' : 'angle-up'}`} />
            </a>
          </div>
        </form>
      </div>
    );
    
  }
  
}

export default connect(mapStateToProps)(SearchBar);
