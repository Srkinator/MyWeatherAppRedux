import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temperature = cityData.list.map(elem => elem.main.temp - 273);
        const pressure = cityData.list.map(elem => elem.main.pressure);
        const humidity = cityData.list.map(elem => elem.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                   <Chart data={temperature} color="red" units="C"/>
                </td>
                <td> 
                <Chart data={pressure} color="blue" units="Hpa"/>

                </td>
                <td> 
                <Chart data={humidity} color="orange" units="%"/>

                </td>
            </tr>
        )
    }
    render() {
        console.log(this.props.weather);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, null)(WeatherList)