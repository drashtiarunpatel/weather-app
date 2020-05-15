import axios from '../axios';

export const FILLCITYLIST = 'FILLCITYLIST';
export const SAVETODAYWEATHER = 'SAVETODAYWEATHER';
export const SAVEFORCASTWEATHER = 'SAVEFORCASTWEATHER';
export const SAVEFAVCITYLIST = 'SAVEFAVCITYLIST';
export const SAVESELECTEDKEY = 'SAVESELECTEDKEY';
export const ERRORMODALHANDLE = 'ERRORMODALHANDLE';

export const errorModalHandler = data => {
    return {
        type: ERRORMODALHANDLE,
        data: data
    }
}

export const saveFavList = (data) => {
    return {
        type: SAVEFAVCITYLIST,
        data: data
    }
}

export const saveCityList = (data, cityName) => {
    return {
        type: FILLCITYLIST,
        data: data,
        cityName: cityName
    }
}
export const saveTodayData = (data, cityKey, cityName) => {
    return {
        type: SAVETODAYWEATHER,
        data: data,
        cityName: cityName,
        cityKey: cityKey
    }
}
export const saveForecastData = (data) => {
    return {
        type: SAVEFORCASTWEATHER,
        data: data
    }
}

export const saveSelectedKey = cityKey => {
    return {
        type: SAVESELECTEDKEY,
        data: cityKey
    }
}

export const fillCityList = (data) => {
    return dispatch => {
        let cityList = [];
        if (data !== '') {
            axios.get('locations/v1/cities/autocomplete?apikey=' + process.env.ACCWEATHER_API_KEY + '&q=' + data)
                .then(response => {
                    response.data.map(data => (
                        cityList.push({
                            name: data.LocalizedName,
                            state: data.AdministrativeArea.LocalizedName,
                            countryName: data.Country.LocalizedName,
                            key: data.Key,
                        })
                    ));
                    dispatch(saveCityList(cityList, data));
                })
                .catch(() => dispatch(errorModalHandler(true)))
        }
        else
            dispatch(saveCityList([], ''))
    }
}

export const saveTodayWeather = (cityKey, cityName) => {
    return dispatch => {
        axios.get('currentconditions/v1/' + cityKey + '?details=true&apikey=' + process.env.ACCWEATHER_API_KEY)
            .then(response => {
                dispatch(saveTodayData(response.data[0], cityKey, cityName))
            })
            .catch(() => dispatch(errorModalHandler(true)))
    }
}

export const saveForecastWeather = cityKey => {
    return dispatch => {
        axios.get('forecasts/v1/daily/5day/' + cityKey + '?metric=true&details=true&apikey=' + process.env.ACCWEATHER_API_KEY)
            .then(response => {
                dispatch(saveForecastData(response.data));
            })
            .catch(() => dispatch(errorModalHandler(true)))
    }
}

export const addFavCityList = (cityName, cityKey, list) => {
    return dispatch => {
        let favList = [...list];
        favList.push({ cityName: cityName, cityKey: cityKey });
        dispatch(saveFavList(favList));
    }
}

export const updateFavCityList = (cityKey, list) => {
    return dispatch => {
        let favList = [...list];
        favList = favList.filter(data => data.cityKey !== cityKey + '');
        dispatch(saveFavList(favList));
    }
}