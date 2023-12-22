import styled from "styled-components"
import CarouselImg from "../assets/carouselimg.png"

const CardContainer = styled.div`
  height: 233px;
  width: 159px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;

`
const CardImage = styled.img`
  object-fit: contain;
`
const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(20, 18, 24, 0.00) 0%, #0b0a0d 100%);
  padding-left: 20px;
  padding-bottom: 24px;
  & > h3{
    margin: 0;
    margin-top: 18px;
    font-size: 0.9rem;
    font-weight: 500;
  }
  & > p{
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--secondary);
  }
`
export default function Card() {
  return (
    <CardContainer>
      <CardImage src={CarouselImg} />
      <CardDescriptionContainer>
        <h3>Days Gone</h3>
        <p>$34,99</p>
      </CardDescriptionContainer>
    </CardContainer>
  )
}