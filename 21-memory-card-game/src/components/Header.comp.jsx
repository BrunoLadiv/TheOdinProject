import styled from "styled-components";

const Title = styled.h1`
  color: var(--primary-text-color);
  text-align: center;
  margin: 0;
  font-size: 5rem;
`

const HeaderWrapper = styled.header`
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>POKE MEMO</Title>
    </HeaderWrapper>
  )
}