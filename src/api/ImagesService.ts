import { Properties } from "models/properties";
import HttpApiService from "./HttpApiService";



// const API_BASE = `${process.env.REACT_APP_API_URI}`;

const API_BASE = `http://localhost:9000`;

const PROPERTIES_ENDPOINT = `${API_BASE}/picture`;


export class ImagesApi extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  //#region Contact
  getImageById = (id: number) => {
    return this.get(`${PROPERTIES_ENDPOINT}/${id}`);
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

export const ImagesApiService = new ImagesApi();