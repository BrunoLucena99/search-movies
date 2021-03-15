import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
		margin: 0;
    padding: 0;
		font: 400 1rem 'Inter', sans-serif;
  }

	@media(max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media(max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}
	
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: #FFF;
  }
	
  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

	strong {
		font-weight: bold;
	}
`

const theme = {
  colors: {
		primary: '#1E122C',
		secondary: '#C07F8E',
		ternary: '#64539F',
		btnActive: '#C07D6A',
		background: '#DEDEDE',
		text: '#FFF'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
