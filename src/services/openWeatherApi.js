const axios = require('axios')
const API_KEY = 'fe7ebed9faa759859c284a5ca545e222'
const getLatLon = (zip) => {
    if (zip) {
        const GEO_URL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`
        
        return axios.get(GEO_URL).then(response => {
            if (response && response.data) {
                return response.data
            }
        }).catch(error => {
            console.log({error})
            return {}
        })
    }
}

const getWeather = async (zip) => {

    let latLon = await getLatLon(zip)
    if (Object.keys(latLon).length > 0) {
        const {lat, lon, name} = latLon
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=imperial`
        // const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
        return axios.get(WEATHER_URL).then(response => {
            if (response && response.data) {
                response.data.city = name
                return response.data
            }
            return {}
        }).catch(currentWeatherError => {
            console.log({currentWeatherError})
            return {}
        })
    }
    
}

// const getForcast = async (zip) => {
//     let latLon = await getLatLon(zip)
//     if (Object.keys(latLon).length > 0) {
//         const { lat, lon } = latLon
//         const FORCAST_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=imperial`
//         return axios.get(FORCAST_URL).then(response => {
//             console.log({response})
//             if (response && response.data) {
//                 return response.data
//             }
//             return {}
//         }).catch(forcastError => {
//             console.log({forcastError})
//             return {}
//         })
//     }
// }


export {
    getLatLon,
    getWeather
    // getCurrentWeather,
    // getForcast
}