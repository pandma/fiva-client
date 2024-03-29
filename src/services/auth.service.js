import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("jwt");

      if (token) {
        config.headers = { Authorization: `Bearer ${token}` };
      }

      return config;
    });
  }

  signup = (user) => {
    return this.api.post("/register", user);
  };

  login = (user) => {
    return this.api.post("/login", user);
  };

  verify = (token) => {
    return this.api.post("/user", token);
  };
  getUsers = () => {
    return this.api.get("/users");
  };
  updateUsers = (user) => {
    return this.api.put("/user/update", user);
  };
}

const authService = new AuthService();

export default authService;
