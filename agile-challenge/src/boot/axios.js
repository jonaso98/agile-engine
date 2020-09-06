import Vue from 'vue'
import axios from 'axios'


const apiAgileEngine = axios.create({
    baseURL: 'http://interview.agileengine.com/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
})

export default {
    async postAuthToken(formData){
        return await apiAgileEngine.post('/auth',formData)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error));
    }
}

//Vue.prototype.$axios = axios
