// /*global google*/
import React, { Component } from 'react';
const google = window.google;
console.log(window.google);
class GoogleMap extends Component {

  componentDidMount() {
    console.log(this.props);
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div style={{width:"200px", height:"200px", position:""}} ref='map' />;
  }
}

export default GoogleMap;