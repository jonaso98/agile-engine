//we import Api from axios from boot path
import apiAgileEngine  from 'boot/axios'
//import SessionStorage 
import { SessionStorage } from 'quasar'

//this is our first acction we are going to bring the token access 
export function getTokenValid ({ commit }, payload) {
    // we are going to return a promise (Resolve or Reject) with the answer
    return new Promise( async (resolve, reject) => {    
        const formData = new FormData()
        formData.set('apiKey', payload.apiKey);
        await apiAgileEngine.postAuthToken(formData)
        .then(response => {
            console.log("response here ",response.data.datas)
            if (response.data.datas) {
                //access token saved correctly
                commit('setUserDetails',response.data.datas)
                //return the response
                resolve(response)
            }            
        })
        .catch(error => {
            reject(error)
        })
    })  
}

export function getImages ({ commit }, payload) {
    // we are going to return a promise (Resolve or Reject) with the answer
    return new Promise( async (resolve, reject) => {

        await apiAgileEngine.getImages()
        .then(response => {
                        
            resolve(response)                        
        })
        .catch(error => {
            reject(error)
        })
    })  
}
