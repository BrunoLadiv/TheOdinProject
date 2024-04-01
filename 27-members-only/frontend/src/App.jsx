import Header from './components/Header'
import Pagination from './components/Pagination'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Pagination />
    </>
  )
}

export default App
