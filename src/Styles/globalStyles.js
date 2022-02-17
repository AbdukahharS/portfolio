import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  #main * {
    z-index: 2;
  }

  svg.burger path {
    fill: none;
    stroke: white;
    stroke-width: 2px;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  #top,
  #bottom {
    stroke-dasharray: 30, 75.39;
    transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
  }

  svg.burger.active #top,
  svg.burger.active #bottom {
    stroke-dasharray: 75.39;
    stroke-dashoffset: -60;
  }

  svg.burger:nth-child(2) {
    transform: rotate(0deg);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  svg.burger:nth-child(2) path {
    transition: all 0.4s ease-in-out 0.6s;
  }

  svg.burger:nth-child(2).active {
    transform: rotate(180deg);
  }

  .rocket #top {
    stroke-dasharray: 30, 88;
  }

  ::-webkit-scrollbar-track {
	  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	  border-radius: 10px;
	  background-color: ${(props) => props.theme.colors.background1};
    height: 100%;
  }

  ::-webkit-scrollbar {
	  width: 12px;
    background-color: ${(props) => props.theme.colors.background1};
  }

  ::-webkit-scrollbar-thumb {
	  border-radius: 10px;
	  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	  background-color: #585c74;
  }
`

export default GlobalStyles
