import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as actionType from '../../store/actions';
import windIcon from "../../images/icon-wind.png";
import directionIcon from "../../images/icon-compass.png";
import * as timeFormat from '../../utilities/time-format';

class WeatherDetail extends Component {
    render() {
        return (
            <div className="forecast-table">
                {Object.keys(this.props.todayWeather).length !== 0
                    && this.props.forecastWeather.length !== 0
                    &&
                    <div className="container">
                        <div className="container margin-10">
                            {
                                this.props.favCityList.find(city => city.cityKey === this.props.cityKey) ?
                                    <Button variant="success" size="lg" block>
                                        Added to Fav. List
                                    </Button> :
                                    <Button variant="primary" size="lg" block onClick={() =>
                                        this.props.addToFavList(this.props.cityName, this.props.cityKey, this.props.favCityList)}>
                                        Add to Fav. List
                    </Button>
                            }
                        </div>
                        <div className="forecast-container">
                            <div className="today forecast">
                                <div className="forecast-header">
                                    <div className="day">{timeFormat.getCurrentDay(this.props.todayWeather.LocalObservationDateTime)}</div>
                                    <div className="date">{timeFormat.getFormattedDate(this.props.todayWeather.LocalObservationDateTime)}</div>
                                </div>
                                <div className="forecast-content">
                                    <div className="location">{this.props.cityName}</div>
                                    <div className="degree">
                                        <div className="num">{this.props.todayWeather.Temperature.Metric.Value}<sup>o</sup>C</div>
                                        <div className="forecast-icon">
                                            <img src={require('../../images/logo/' + this.props.todayWeather.WeatherIcon + '.png')} alt={this.props.todayWeather.WeatherText} title={this.props.todayWeather.WeatherText} width="90" />
                                        </div>
                                    </div>
                                    <span><img src={windIcon} alt="" />{this.props.todayWeather.Wind.Speed.Imperial.Value} {this.props.todayWeather.Wind.Speed.Imperial.Unit}</span>
                                    <span><img src={directionIcon} alt="" />{this.props.todayWeather.Wind.Direction.English}</span>
                                </div>
                            </div>
                            {this.props.forecastWeather.DailyForecasts
                                .slice(1).map((data) =>
                                    <div className="forecast" key={data.Date}>
                                        <div className="forecast-header">
                                            <div>{timeFormat.getCurrentDay(data.Date)}</div>
                                        </div>
                                        <div className="forecast-content">
                                            <div className="forecast-icon">
                                                <img src={require('../../images/logo/' + data.Day.Icon + '.png')} alt={data.Day.LongPhrase} title={data.Day.LongPhrase} />
                                            </div>
                                            < div className="degree" > {data.Temperature.Maximum.Value} < sup > o</sup>{data.Temperature.Maximum.Unit}</div>
                                            <small>{data.Temperature.Minimum.Value}<sup>o</sup>{data.Temperature.Minimum.Unit}</small>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>}
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        todayWeather: state.todayWeather,
        forecastWeather: state.forecastWeather,
        cityName: state.cityName,
        cityKey: state.cityKey,
        favCityList: state.favCityList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavList: (cityName, cityKey, favCityList) => dispatch(actionType.addFavCityList(cityName, cityKey, favCityList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);