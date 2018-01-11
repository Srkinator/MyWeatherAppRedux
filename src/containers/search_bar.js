import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange = ({ target }) => {
        this.setState({ term: target.value })
    }

    onFormSubmit = e => {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className= "searchBar">
            <h2>Welcome to Srki's 5-days weather forecast</h2>
                <form className= "searchBar" onSubmit={this.onFormSubmit}>
                    <input
                        style={{width:"80%", margin:"0 50px"}}
                        placeholder='Please enter desired city and press enter'
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </form>
                {this.props.error ? <p className='error-ui'>Oops! Server Response: <span className='text-danger text-uppercase'> {this.props.error.response.data.message} </span></p> : ''}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps({ weather }) {
    return { error: weather.error }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);