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
            <div>
                <form className='input-group' onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Get a five-day forecast of your favorite cities'
                        className='form-control'
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secondary'>Submit</button>
                    </span>
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