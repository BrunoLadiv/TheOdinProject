import styled from "styled-components";

const Title = styled.h1`
  color: var(--primary-text-color);
  text-align: center;
`

const HeaderWrapper = styled.header`
  font-size: 2.5rem;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>POKE MEMO</Title>
    </HeaderWrapper>
  )
}