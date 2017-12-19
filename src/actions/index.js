import axios from 'axios';
import { WEATHER_API_KEY, BASE_URL } from '../constants';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export function fetchWeather(city) {
    
    const request = axios({
        method: 'get',
        url: BASE_URL,
        params: {
            appid: WEATHER_API_KEY,
            q: city
        }
    })

    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: request
    };
}