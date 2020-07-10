import axios from 'axios'
import { MUSIC_SERVER } from '../components/Config.js'
import {
    REGISTER_MUSIC,
    UPDATE_MUSIC
} from './types'

// 음원 추가
export function registerMusic(dataToSubmit) {
    const request = axios.post(`${MUSIC_SERVER}`, dataToSubmit)
        .then(response => response.data)
    
    return {
        type: REGISTER_MUSIC,
        payload: request
    }
}

// 음원 수정
export function updateMusic(dataToSubmit, musicId) {
    console.log("전송값", dataToSubmit, musicId)
    const request = axios.put(`${MUSIC_SERVER}/${musicId}`, dataToSubmit)
        .then(response => response.data)
    
    return {
        type: UPDATE_MUSIC,
        payload: request
    }
}