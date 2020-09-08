//we import Api from axios from boot path
import apiAgileEngine  from 'boot/axios'
import { SessionStorage } from 'quasar' 

//this is our first acction we are going to bring the token access 
export function getTokenValid ({ commit }, payload) {
    // we are going to return a promise (Resolve or Reject) with the answer
    return new Promise( async (resolve, reject) => {    
        const formData = new FormData()
        formData.set('apiKey', payload.apiKey);
        let Datas =  {
            'apiKey': payload.apiKey
        }
        await apiAgileEngine.postAuthToken(Datas)
        .then(response => {
            console.log("response here ",response.data)
            if (response.data) {
                //access token saved correctly
                commit('setUserDetails',response.data)
                //return the response
                resolve(response)
            }
        })
        .catch(error => {
            reject(error)
        })
    })  
}

export function getImages ({ commit, state }, payload) {
    // we are going to return a promise (Resolve or Reject) with the answer
    
    return new Promise( async (resolve, reject) => {
        
       await apiAgileEngine.getImages(SessionStorage.getItem("userDetails").token,payload)
        .then(response => {
            commit('setImagesMutation',response.data)
            resolve(response.data)                        
        })
        .catch(error => {
            reject(error)
        })
    })  
}

export function getImagesID ({ commit, state }, payload) {
    // we are going to return a promise (Resolve or Reject) with the answer
    
    return new Promise( async (resolve, reject) => {
        
       await apiAgileEngine.getImagesID(SessionStorage.getItem("userDetails").token,payload)
        .then(response => {
            //commit('setImagesMutation',response.data)
            resolve(response.data)                        
        })
        .catch(error => {
            reject(error)
        })
    })  
}
