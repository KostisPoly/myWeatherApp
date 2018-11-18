import React, {Component} from 'react';
import {connect} from 'react-redux';

import {TempChart, HumidChart} from '../components/charts';

class WeatherList extends Component {
    renderWeather(cityList) {
        const dataList = [];
        const temperature = cityList.list.map(weather => weather.main.temp);
        const humidity = cityList.list.map(humid => humid.main.humidity);
        //const timePeriods = cityList.list.map(periods =>periods.dt_txt);
        const timePeriods = cityList.list.map( (periods) => {
            let dt = new Date(periods.dt*1000);
            let hr = dt.getHours();
            let m = "0" + dt.getMinutes();
            //let s = "0" + dt.getSeconds();
            return hr + ':' + m.substr(-2); 
        });
        let max_temp = Math.max(...temperature);
        let max_humid = Math.max(...humidity);
        for (let index = 0; index < 9; index++) {
            //let max_temp_period = '';
            dataList.push({
                time: timePeriods[index],
                temp: temperature[index],
                humid: humidity[index]
            });

            if (temperature[index] === max_temp) {
                var max_temp_period = timePeriods[index];
            }
            if (humidity[index] === max_humid) {
              var max_humid_period = timePeriods[index];
            }
        }
        console.log(dataList);
        return <tr key={cityList.city.id}>
            <td><p>{cityList.city.name}</p>
                <p>{max_temp} θα σημειωθεί στις{max_temp_period}</p>
                <p>{max_humid}θα σημειωθεί στις{max_humid_period}</p>
            </td>
            <td>
              <TempChart data={dataList} />
            </td>
            <td>
                <HumidChart data={dataList} />
            </td>
          </tr>;
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ΠΟΛΗ</th>
                            <th>ΘΕΡΜΟΚΡΑΣΙΑ</th>
                            <th>ΥΓΡΑΣΙΑ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}


function  mapStateToProps (state)  {
    return {
        weather: state.weather
    };
}
export default connect(mapStateToProps)(WeatherList);