import axios from "axios";

class CompanyService {
  constructor() {
    this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });
  }

  getCompanies = () => {
    return this.api.get(`/companies`);
  };

  createCompany = (company) => {
    return this.api.post("/companies", company);
  };

  updateCompany = (companyname) => {
    return this.api.put(`/companies`, companyname);
  };

  getOneCompany = (conpanyname) => {
    return this.api.post("/onecompany", conpanyname);
  };
}

const companyService = new CompanyService();

export default companyService;
