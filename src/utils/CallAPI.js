import axios from 'axios'
import * as Config from './../constant/Config'

const CallAPI = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}

export default CallAPI;