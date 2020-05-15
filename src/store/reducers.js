import * as actionType from './actions';

export const initialState = {
    citySearchParam: '',
    cityList: [],
    forecastWeather: [],
    todayWeather: {},
    showCityList: false,
    cityName: '',
    cityKey: 0,
    favCityList: [],
    selectedCityKey: null,        //For Modal - Fav page,
    showErrorModal: false         //For Modal - in case error occurs
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FILLCITYLIST: {
            return {
                ...state,
                cityList: action.data,
                showCityList: true,
                citySearchParam: action.cityName
            }
        }
        case actionType.SAVETODAYWEATHER:
            return {
                ...state,
                todayWeather: action.data,
                cityName: action.cityName,
                showCityList: false,
                cityKey: action.cityKey,
                citySearchParam: ''
            }
        case actionType.SAVEFORCASTWEATHER:
            return {
                ...state,
                forecastWeather: action.data
            }
        case actionType.SAVEFAVCITYLIST:
            return {
                ...state,
                favCityList: action.data,
                selectedCityKey: null
            }
        case actionType.SAVESELECTEDKEY:
            return {
                ...state,
                selectedCityKey: action.data
            }
        case actionType.ERRORMODALHANDLE:
            return {
                ...state,
                showErrorModal: action.data
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;