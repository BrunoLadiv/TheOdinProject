import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyles from './GlobalStyles'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  )
}
