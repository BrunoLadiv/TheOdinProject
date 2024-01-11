import styled from 'styled-components'

interface StyledButtonProps {
  bg?: string
  color?: string
}

const Btn = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.bg ? props.bg : 'var(--terceary)')};
  color: ${(props) => (props.color ? props.color : 'var(--secondary)')};
  padding: 10px;
  display: flex;
  gap: 5px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }
  & img {
    height: 15px;
  }
`

interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode,
  onClick: any
  
}

function Button({ children, bg, color, onClick}: ButtonProps) {
  return (
    <Btn
      onClick={onClick}
      bg={bg}
      color={color}
      
    >
      {children}
    </Btn>
  )
}

export default Button


