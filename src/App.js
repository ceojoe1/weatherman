import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import {
  RecoilRoot,
} from 'recoil'

import ToggleButton from 'react-toggle-button'

import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global';

import Hero from './components/Hero/hero'
import TodaysForcast from './components/Forcasts/todaysForcast'
import MultiDayForcast from './components/Forcasts/multiDayForcast';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <RecoilRoot>
          <GlobalStyles />
          <div className='toggle-button'>
            <span>Theme: </span>
            <ToggleButton value={theme === 'light' ? true : false} activeLabel={"Light"} inactiveLabel={"Dark"} onToggle={toggleTheme}/>
          </div>
          <h1 className='main-title'>Weather Man</h1>
          <Hero />
          <React.Suspense fallback={<div>Loading...</div>}>
            <TodaysForcast/>
            <MultiDayForcast/>
          </React.Suspense>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App