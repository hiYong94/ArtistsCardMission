import axios from 'axios'
import { MUSIC_SERVER } from '../components/Config.js'
import {
    REGISTER_MUSIC,
    UPDATE_MUSIC
} from './types'

export function registerMusic(dataToSubmit) {
    const request = axios.post(`${MUSIC_SERVER}`, dataToSubmit)
        .then(response => response.data)
    
    return {
        type: REGISTER_MUSIC,
        payload: request
    }
}

export function updateMusic(dataToSubmit, musicId) {
    const request = axios.put(`${MUSIC_SERVER}/${musicId}`, dataToSubmit)
        .then(response => response.data)
    
    return {
        type: UPDATE_MUSIC,
        payload: request
    }
}