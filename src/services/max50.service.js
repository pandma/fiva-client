import axios from "axios";

class Max50Service {
  constructor() {
    this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });
  }

  calculateMax50 = (max50) => {
    return this.api.post("/max50", max50);
  };
}

const max50Service = new Max50Service();

export default max50Service;
