import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import { InputGroup, Button } from 'react-bootstrap'

class SearchLocation extends Component {
    addCityToList(event) {
        event.preventDefault();
        this.props.fillCityList(event.target.value);
    }
    showWeatherData(cityKey, cityName) {
        this.props.saveTodayWeather(cityKey, cityName);
        this.props.saveForecastWeather(cityKey);
    }

    render() {
        return (
            <div className="container find-location">
                <InputGroup>
                    <input className="form-control find-location-box"
                        placeholder="Search by city name, state name, country name"
                        onChange={(data) => this.addCityToList(data)}
                        value={this.props.citySearchParam}
                    />
                    <InputGroup.Append>
                        <Button className="clear-botton" 
                        onClick={() => this.props.fillCityList('')}> X</Button>
                    </InputGroup.Append>
                </InputGroup>
                {this.props.showCityList && <ul className="list-group" id="cityList-items">
                    {this.props.cityList && this.props.cityList.map(data =>
                        <li key={data.key} className="list-group-item"
                            onClick={() => this.showWeatherData(data.key, data.name + ", " + data.state + ", " + data.countryName)}>
                            {data.name},{data.state}, {data.countryName}
                        </li>
                    )}
                </ul>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.cityList,
        todayWeather: state.todayWeather,
        showCityList: state.showCityList,
        cityName: state.cityName,
        citySearchParam:state.citySearchParam
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fillCityList: (data) => dispatch(actionCreators.fillCityList(data)),
        saveTodayWeather: (data, cityName) => dispatch(actionCreators.saveTodayWeather(data, cityName)),
        saveForecastWeather: data => dispatch(actionCreators.saveForecastWeather(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocation);