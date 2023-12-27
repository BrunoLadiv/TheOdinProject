import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyles from './GlobalStyles'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
