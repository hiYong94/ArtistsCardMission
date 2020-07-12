import axios from 'axios'
import { USER_SERVER } from '../components/Config.js'
import {
    LOGIN_USER,
    REGISTER_USER
} from './types'

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}`, dataToSubmit)
        .then(response => response.data)
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
                .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}
