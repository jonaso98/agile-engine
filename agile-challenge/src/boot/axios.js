import Vue from 'vue'
import axios from 'axios'


const apiAgileEngine = axios.create({
    baseURL: 'http://interview.agileengine.com/auth',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
})



export default {
    
}

//Vue.prototype.$axios = axios
