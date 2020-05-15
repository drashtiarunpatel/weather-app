import React, { Component } from 'react';
import SearchLocation from './searchLocation';
import WeatherDetail from './weatherDetail';

export class Home extends Component {
    render() {
        return (
            <div className="site-main">
                <div className="hero">
                    <SearchLocation />
                </div>
                <div className="site-content">
                    <div className="container">
                        <WeatherDetail />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;