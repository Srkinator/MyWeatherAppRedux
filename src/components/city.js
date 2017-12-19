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
            <tr className={['fade-in', this.state.isVisible && 'show'].join(' ')}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temperature} color='orange' units='C' />
                </td>
                <td>
                    <Chart data={pressure} color='green' units='hPa' />
                </td>
                <td>
                    <Chart data={humidity} color='blue' units='%' />
                </td>
            </tr>
        );
    }
};

export default City;