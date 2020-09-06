//we import Api from axios from boot path
import apiAgileEngine  from 'boot/axios'

//this is our first acction we are going to bring the token access 
export function getTokenValid ({}, payload) {
    // we are going to return a promise (Resolve or Reject) with the answer
    return new Promise( async (resolve, reject) => {    
        const formData = new FormData()
        formData.set('apiKey', payload.apiKey);

        await apiAgileEngine.postAuthToken(formData)
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })
    })  
}
