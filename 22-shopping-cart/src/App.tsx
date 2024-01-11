import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
const MaxWidthWrapper = styled.div`
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MaxWidthWrapper>
        <GlobalStyles />
        <Header />
        <Outlet />
        <Footer/>
      </MaxWidthWrapper>
    </QueryClientProvider>
  )
}
