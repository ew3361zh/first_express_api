import axios from 'axios'

let base = 'api'

export default {
    getHelloMessage() {
        return axios.get(base).then(response => { //this is the axios call making a get request to api, when response is received it will automatically convert it from json 
            return response.data
        })
    }
}