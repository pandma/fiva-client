import axios from "axios"

class NodemailerService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/mail` })
        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem("authToken")

            if (token) {
                config.headers = { Authorization: `Bearer ${token}` }
            }

            return config
        })
    }
    sendMail = (mailInfo) => {
        return this.api.post("/bookingmail", mailInfo)
    }
}

const nodemailerService = new NodemailerService()

export default nodemailerService

