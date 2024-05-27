import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import { PrimeReactContext } from 'primereact/api'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { useContext } from 'react'

export default function App() {
  const { changeTheme } = useContext(PrimeReactContext)

  // TODO: mudar para um arquivo e chamar
  if (changeTheme !== undefined) {
    const lightTheme = '/themes/saga-green/theme.css'
    const darkTheme = '/themes/md-dark-deeppurple/theme.css'

    const isDarkMode: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    if (isDarkMode.matches) {
      changeTheme(lightTheme, darkTheme, 'theme-link')
    }

    // isDarkMode.onchange = (event: MediaQueryListEvent) => {
    //   if (event.matches) {
    //   }
    // }
  }

  return (
    <Theme>
      <BrowserRouter>
        <Normalize />
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </Theme>
  )
}
