import logoSVG from '../assets/logo.svg'
import magnifyingSVG from '../assets/mdi_magnify.svg'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'
import Cart from './Cart'


const HeaderContainer = styled.header`

  position: sticky;
  top: 30px;;
  height: 74px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: var(--bg-color);
  z-index: 50;
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  height: 100%;
`
const LogoContainer = styled.div``

const SearchContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  & input {
    border: none;
    outline: none;
    height: 100%;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          src={logoSVG}
          alt="logo"
        />
      </LogoContainer>
      <ButtonsContainer>
        <SearchContainer>
          
          <img
            src={magnifyingSVG}
            alt="magnifying glass"
          />
        </SearchContainer>
        <Cart/>
        
        <MobileMenu />
      </ButtonsContainer>
    </HeaderContainer>
  )
}
