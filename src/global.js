import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    flex-direction: column;
    max-width: 1170px;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .main-title {
    color: ${({ theme }) => theme.hero}
    font-size: 28pt;
  }
  .toggle-button {
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: row;
    padding: 8px;
  }
  .card {
      background: ${({ theme }) => theme.gradient};
      min-height: 250px;
      margin: 8px 4px 8px 4px;
      border-radius: 5px;
      box-shadow: ${({ theme }) => `0px 0.5px 3px ${theme.body}`};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: ${({ theme }) => theme.text};
      flex: 1;
  }

  .card-controls {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex:1;
  }
  .card-controls label {
    margin: 16px;
    font-size: 14pt;
    font-weight: bolder;
  }
  .card-input {
      padding: 12px;
      border-radius: 5px;
      background-color: ${({theme }) => theme.hero}
      color: ${({ theme }) => theme.hero}
      font-weight: bolder;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex:1;
  }
  .card-main-data {
    font-size: 2em;
  }
  .hero-card {
    display: flex;
    flex:0;
  }
  .todays-forcast-card {
    flex: 2;
  }
  .todays-forcast {
    background: ${({ theme }) => theme.hero};
    margin: 8px 0px 8px 0px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
  }
  `
