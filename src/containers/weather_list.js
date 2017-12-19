import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from '../components/city';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    renderWeather = (cityData) => {

        const name = cityData.city.name;
        const temperature = cityData.list.map(elem => elem.main.temp - 273);
        const pressure = cityData.list.map(elem => elem.main.pressure);
        const humidity = cityData.list.map(elem => elem.main.humidity);
        const { lon, lat } = cityData.city.coord;

        const data = { name, temperature, pressure, humidity, lat, lon }
        
        return <City {...data} key={name}/>
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.data.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps, null)(WeatherList);