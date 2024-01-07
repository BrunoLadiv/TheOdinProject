

import { useQuery } from 'react-query';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';

const fetchTop250 = () =>
  axios.get('https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af');
const fetchNewReleases = () =>
  axios.get('https://rawg.io/api/games/lists/recent-games-past?discover=true&ordering=-added&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af');
const fetchUpcoming = () =>
  axios.get('https://rawg.io/api/games/calendar/2024/1?ordering=-released&popular=true&page=1&page_size=20&key=c542e67aec3a4340908f9de9e86038af');
const fetchRandomGameDetails = (id: string) =>
  axios.get(`https://rawg.io/api/games/${id}?key=c542e67aec3a4340908f9de9e86038af`);

function Home() {
  const { data: top250Data } = useQuery('top-250', fetchTop250);
  const { data: newReleasesData } = useQuery('new-releases', fetchNewReleases);
  const { data: upcomingData } = useQuery('upcoming', fetchUpcoming);

  const randomGame = top250Data?.data.results[
    Math.floor(Math.random() * (top250Data?.data.results.length || 0))
  ];

  const { data: randomGameDetails } = useQuery(
    'random-game-details',
    () => fetchRandomGameDetails(randomGame?.slug || ''),
    {
      enabled: !!randomGame,
    }
  );

  return (
    <>
      {randomGameDetails && (
        <HeroSection
          price={19.99}
          name={randomGameDetails.data.name}
          background_image={randomGameDetails.data.background_image}
          description_raw={randomGameDetails.data.description_raw}
        />
      )}
      <Carousel title="Top 250" data={top250Data?.data.results} />
      <Carousel title="New releases" data={newReleasesData?.data.results} />
      <Carousel title="Upcoming" data={upcomingData?.data.results} />
    </>
  );
}

export default Home;
