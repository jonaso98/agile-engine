import Vue from 'vue'
import axios from 'axios'


const apiAgileEngine = axios.create({
    baseURL: 'http://localhost/backend.body/public_html',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
})

const apiAgileEngineAuth = axios.create({
    baseURL: 'http://localhost/backend.body/public_html/app/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
})

//add a request interceptor 
apiAgileEngine.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request', config)
        return config;
  }, function (error) {    
        return Promise.reject(error);
  });

// Add a response interceptor
apiAgileEngine.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    
    
    return Promise.reject(error);
  });  


export default {
    async postAuthToken(formData){
        return await apiAgileEngineAuth.post('/auth',formData)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error));
    }
}

//Vue.prototype.$axios = axios
