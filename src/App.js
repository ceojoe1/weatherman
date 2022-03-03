import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import {
  RecoilRoot,
} from 'recoil'
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
          <button onClick={toggleTheme}>Toggle theme</button>
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