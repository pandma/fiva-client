import axios from "axios"

class ContactUserService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })

    }

    getContacts = () => {
        return this.api.get(`/contact`)
    }

    createContact = (user) => {
        return this.api.post("/contact", user)
    }

    updateContactState = (userName) => {
        return this.api.put(`/contact`, userName)
    }

}

const contactUserService = new ContactUserService()

export default contactUserService