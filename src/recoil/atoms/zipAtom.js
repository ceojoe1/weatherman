import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue
  } from 'recoil'

  const zipState = atom({
      key: 'zipState',
      default: '87120'
  })


  export {
      zipState
  }