import styled from 'styled-components'
import Card from '../components/Card'

const AllGamesGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  min-height: 100vh;
  justify-items: center;
`
export default function Games() {
  return (
    <>
      <h1>All games</h1>
      <AllGamesGridContainer>
      {[...Array(19)].map(index => (
        <Card key={index} />
      ))}
      </AllGamesGridContainer>
    </>
  )
}
