import React from 'react'
import { useRecoilValue} from 'recoil'
import { weatherDataState } from '../../recoil/selectors/zipSelectors'

function TodaysForcast() {
    const forcast = useRecoilValue(weatherDataState)
    if (forcast && Object.keys(forcast).length > 0) {
        const {city} = forcast
        const {temp, weather} = forcast.daily[0]
        const { day, min, max} = temp 
        const [{main}] = weather
        return (
            <div className='card'>
                <h2>{city}</h2>
                <div className='todays-forcast-container'>
                    <h1>
                        {day} °F
                    </h1>
                    <hr/>
                    <p>{main}</p>
                    <p>{min} °F / {max} °F</p>
                </div>
            </div>
        )
    }
    return (
        <div className='card'>
            Enter a zipcode to view todays forcast
        </div>
    )
    
}


export default TodaysForcast