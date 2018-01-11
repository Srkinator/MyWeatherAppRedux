import React, { Component } from 'react';
import GoogleMap from './google_map';
import Chart from './chart';

class City extends Component {
    constructor(props) {
        super(props);

        this.state = { isVisible: false }
    }

    componentDidMount() {
        this.setState({ isVisible: true });
    }

    render() {

        const { name, lon, lat, temperature, pressure, humidity } = this.props;

        return (
            <div className = "row cityinfo">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <h5>{name}</h5>
                <GoogleMap lon={lon} lat={lat}/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <h5>Temperature</h5>
                    <Chart data={temperature} color='orange' units='C' />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <h5>Pressure</h5>
                    <Chart data={pressure} color='green' units='hPa' />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <h5>Humidity</h5>
                    <Chart data={humidity} color='blue' units='%' />
                </div>
            </div>
        );
    }
};

export default City;