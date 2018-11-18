import axios from 'axios';

const API_KEY = 'da3a0869c49d60edcd7c2a1dac740f7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//export const to reducers to reference same string
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},gr&cnt=9&units=metric`;
    const request = axios.get(url).catch(error =>{console.log(error.response.data.message)});
    return {
        type: FETCH_WEATHER,
        payload: request
    };
    
}