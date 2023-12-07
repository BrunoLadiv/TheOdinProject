import styled from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
`
const StartGameScreen = styled.form`
  width: 40%;
  height: 400px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
const DifficultyContainer = styled.ul`
  list-style: none;
  margin-top: 50px;
  & li {
    cursor: pointer;
    font-size: 3rem;
    font-weight: bolder;
    transition: transform 250ms;
    text-shadow: #050404 1px 0 10px;
    margin: 5px;
    &:hover {
      transform: scale(1.1) translateX(25px);
      text-decoration: underline;
      text-transform: uppercase;
      &:before{
        content: '> ';
      }
    }
    &:nth-child(1) {
      color: green;
    }
    &:nth-child(2) {
      color: white;
    }
    &:nth-child(3) {
      color: red;
    }
  }
`
const Title = styled.h1`
  font-size: 4rem;
  color: white;
  text-shadow: #050404 1px 0 10px;
`
export default function ConfigScreen({setDifficulty, setGameStatus}) {
  return (
    <Wrapper>
      <StartGameScreen>
        <Title>Choose a difficulty</Title>
        <DifficultyContainer>
          <li onClick={() => {
            setDifficulty('easy')
            setGameStatus('game')
          }}>Easy</li>
          <li onClick={() => {
            setDifficulty('normal')
            setGameStatus('game')
          }}>Normal</li>
          <li onClick={() => {
            setDifficulty('hard')
            setGameStatus('game')
          }} >Hard</li>
        </DifficultyContainer>
      </StartGameScreen>
    </Wrapper>
  )
}
