import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyles from './GlobalStyles'
import Cart from './components/Cart'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Cart />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  )
}
