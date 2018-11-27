import Axios from "axios"

const VUE_APP_API_URL = "https://192.168.1.6:222"

const axios = Axios.create({
    baseURL : VUE_APP_API_URL,
    timeout : 10000,
})

export default axios
