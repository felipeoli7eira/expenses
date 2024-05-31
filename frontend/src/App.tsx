import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import { PrimeReactContext } from 'primereact/api'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { useContext } from 'react'

export default function App() {
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
