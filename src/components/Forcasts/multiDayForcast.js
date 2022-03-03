import React from 'react'
import { useRecoilValue} from 'recoil'
import { weatherDataState } from '../../recoil/selectors/zipSelectors'
const whichDay = (date) => {
    const day = new Date(date * 1000).getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[day]
}
function MultiDayForcast() {
    const forcast = useRecoilValue(weatherDataState)
    if (forcast && Object.keys(forcast).length > 0) {
        console.log({forcast})
        const {daily} = forcast
        return (
            <div className='card-container'>
            {
                daily.map((d,index) => {
                    console.log({d})
                    const {dt, temp, weather} = d
                    const [{main}] = weather
                    if (index <= 4) {
                        return <div key={dt} className='card'> 
                            <h1>{whichDay(d.dt)}</h1>   
                            <hr/>
                            <p>{main}</p>
                            <p>{temp.max} / {temp.min}</p>

                        </div>
                    }
                })
            }
            </div>
        )
    }
    return (
        <div className='card'>
            Enter a zipcode to view the 5-day forcast
        </div>
    )
    
}
export default MultiDayForcast