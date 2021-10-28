import { Properties } from "models/properties";
import HttpApiService from "./HttpApiService";



// const API_BASE = `${process.env.REACT_APP_API_URI}`;

const API_BASE = `http://localhost:9000`;

const PROPERTIES_ENDPOINT = `${API_BASE}/properties`;


export class PropertieApi extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  //#region Contact
  getContactById = (id: number) => {
    return this.get(`${PROPERTIES_ENDPOINT}/${id}`);
  };

  //#region Contact
  getSearchById = (city: string) => {
    return this.get(`${PROPERTIES_ENDPOINT}/search/"${city}"`);
  };

  getAllproperties = () => {
    const response = this.get(`${PROPERTIES_ENDPOINT}`);
    return response
  };

  createContact = (data: Properties) => {
    return super.create(`${PROPERTIES_ENDPOINT}`, data);
  };

  updateContact = (data: Properties) => {
    return super.update(`${PROPERTIES_ENDPOINT}`, data);
  };
  //#endregion Contact

}

export const PropertieApiService = new PropertieApi();