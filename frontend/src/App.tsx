import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/routes'
import { IconContext } from 'react-icons'

import { PrimeReactProvider } from 'primereact/api'
import primeReactConfigs from './config/primereact'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  return (
    <PrimeReactProvider value={primeReactConfigs}>
      <Theme>
        <BrowserRouter>
          <Normalize />
          <IconContext.Provider value={{ color: 'blue', className: 'global-class-name' }}>
            <AppRoutes />
          </IconContext.Provider>
          <GlobalStyle />
        </BrowserRouter>
      </Theme>
    </PrimeReactProvider>
  )
}
