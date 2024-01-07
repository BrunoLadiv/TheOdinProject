import Carousel from '../components/Carousel'
import HeroSection from '../components/HeroSection'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchTop250 = () =>
  axios.get(
    'https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af'
  )
const fetchNewReleases = () =>
  axios.get(
    'https://rawg.io/api/games/lists/recent-games-past?discover=true&ordering=-added&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af'
  )
const fetchUpcoming = () =>
  axios.get(
    'https://rawg.io/api/games/calendar/2024/1?ordering=-released&popular=true&page=1&page_size=20&key=c542e67aec3a4340908f9de9e86038af'
  )

function Home() {
  const { data: top250Data } = useQuery('top-250', fetchTop250)
  const { data: newReleasesData } = useQuery('new-releases', fetchNewReleases)
  const { data: upcomingData } = useQuery('upcoming',fetchUpcoming)
  console.log(top250Data?.data.results)
  return (
    <>
      <HeroSection />
      <Carousel title='Top 250' data={top250Data?.data.results}/>
      <Carousel title='New releases' data={newReleasesData?.data.results} />
      <Carousel title='Upcoming' data={upcomingData?.data.results}/>
    </>
  )
}

export default Home
