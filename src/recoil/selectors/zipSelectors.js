import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue
  } from 'recoil'
import { zipState  } from '../atoms/zipAtom'
import { getWeather } from '../../services/openWeatherApi'

  const weatherDataState = selector({
      key: 'zipStateSelector',
      get: async ({get}) => {
          let zip = get(zipState)
          if (zip.length === 5) {
            return await getWeather(zip)
          }
      }
  })


  export {
      weatherDataState,
  }