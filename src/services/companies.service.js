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

  updateCompany = (companyName) => {
    return this.api.put(`/companies`, companyName);
  };

  getOneCompany = (companyName) => {
    const req = { name: companyName };
    return this.api.post("/onecompany", req);
  };
}

const companyService = new CompanyService();

export default companyService;
