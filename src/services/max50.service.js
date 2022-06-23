import axios from "axios"

class Max50Service {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/api` })

    }

    createMax50 = (maximeter) => {
        return this.api.post("/getoptimal50/", maximeter)
    }


}

const max50Service = new Max50Service()

export default max50Service