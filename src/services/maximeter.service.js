import axios from "axios"

class MaximeterService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/api` })

    }

    getMaximeter = () => {
        return this.api.get(`/3.0/`)
    }

    createMaximeter = (maximeter) => {
        return this.api.post("/3.0/", maximeter)
    }

    updateMaximeter = (id) => {
        return this.api.put(`/3.0/${id}`)
    }

}

const maximeterService = new MaximeterService()

export default maximeterService