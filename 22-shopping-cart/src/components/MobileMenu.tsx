import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const MobileMenuBtn = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 13%;
  color: #090909;
  width: 3.5em;
  height: 3.5em;
  border-radius: 0.5em;
  transition: all 0.3s;
  z-index: 999;
  & > input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    display: none;
    visibility: hidden;
  }
  & span {
    width: 30px;
    height: 4px;
    background: rgb(253, 253, 253);
    border-radius: 100px;
    transition: 0.3s ease;
  }
  & input[type]:checked ~ span.top {
    transform: translateY(290%) rotate(45deg);
    width: 40px;
  }
  & input[type]:checked ~ span.bot {
    transform: translateY(-270%) rotate(-45deg);
    width: 40px;
    box-shadow: 0 0 10px #495057;
  }
  & input[type]:checked ~ span.mid {
    transform: translateX(-20px);
    opacity: 0;
  }
`
const MobileMenuItemList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  height: 110dvh;
  top: -50px;
  left: 0;
  z-index: 100;
  background: linear-gradient(
    135deg,
    rgba(12, 12, 12, 0.862),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transform: translateX(0);
  transition: all 0.3s ease;
  margin-top: 15px;
  & li {
    list-style: none;
    margin-bottom: 15px;
    margin-right: 50px;
    
  } & a {
    text-decoration: none;
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 100;
    
  }
  & li:first-child {
    margin-top: 150px;
  }
`
const MobileMenuItemClosed = styled(MobileMenuItemList)`
  transform: translateX(-100%);
  
`
const MobileMenuContainer = styled.div``
export default function MobileMenu() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const MobileMenuItems = isOpened ? MobileMenuItemList : MobileMenuItemClosed
  return (
    <MobileMenuContainer>
      <MobileMenuBtn >
        <input
          type="checkbox"
          id="check"
          checked={isOpened}
          onClick={() => setIsOpened(!isOpened)}
        />
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bot"></span>
      </MobileMenuBtn>
      <MobileMenuItems>
        <li onClick={() => setIsOpened(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setIsOpened(false)}>
          <Link to="/games">Games</Link>
        </li>
        
      </MobileMenuItems>
    </MobileMenuContainer>
  )
}
