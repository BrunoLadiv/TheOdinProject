import styled from "styled-components"
import CarouselImg from "../assets/carouselimg.png"

const CardContainer = styled.div`
  height: 233px;
  width: 159px;
  border-radius: 8px 0px;

`
const CardImage = styled.img`
  border-radius: 8px 0px;
  object-fit: contain;
`
export default function Card() {
  return (
    <CardContainer>
      <CardImage src={CarouselImg} />
    </CardContainer>
  )
}