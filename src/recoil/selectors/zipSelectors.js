import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue
  } from 'recoil'
import { zipState  } from '../atoms/zipAtom'
import { getCurrentWeather, getForcast, getWeather } from '../../services/openWeatherApi'

  const weatherDataState = selector({
      key: 'zipStateSelector',
      get: async ({get}) => {
          let zip = get(zipState)
          if (zip.length === 5) {
            return await getWeather(zip)
          }
      }
  })
//   const multiForcastState = selector({
//       key: 'multiForcastState',
//       get: async ({get}) => {
//           let zip = get(zipState)
//           if (zip.length === 5) {
//               return await getForcast(zip)
//           }
//       }
//   })


  export {
      weatherDataState,
    //   multiForcastState
  }