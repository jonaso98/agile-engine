// add the mutation to save the token access

import { SessionStorage } from 'quasar'

export function setUserDetails ( state, payload ) {
    state.userDetails = payload
    SessionStorage.set('userDetails',payload)
}
//add mutation seting images 
export function setImagesMutation ( state, payload ) {
    state.images = payload
}
