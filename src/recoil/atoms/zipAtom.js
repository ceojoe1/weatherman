import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue
  } from 'recoil'

  const zipState = atom({
      key: 'zipState',
      default: '73301'
  })


  export {
      zipState
  }