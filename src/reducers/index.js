import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    
    weather: WeatherReducer

    //Default reducer dev starter
    //state: (state = {}) => state
});

export default rootReducer;