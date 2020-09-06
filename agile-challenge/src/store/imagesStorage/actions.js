//we import Api from axios from boot path
import apiAgileEngine  from 'boot/axios'

//this is our first acction we are going to bring the token access 
export function getTokenValid (/* context */) {
    // we are going to return a promise (Resolve or Reject) with the answer
    return new Promise( async (resolve, reject) => {    
        
        await apiAgileEngine.postAuthToken()
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })
    })  
}
