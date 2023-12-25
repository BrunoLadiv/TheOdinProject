
import styled from 'styled-components';

interface StyledButtonProps {
  bg?: string;
  color?: string;
}

const Btn = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.bg ? props.bg : 'var(--terceary)')};
  color: ${(props) => (props.color ? props.color : 'var(--secondary)')};
  padding: 10px;
  width: 105px;
  height: 38px;
  text-align: center;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover, &:focus, &:active {
    transform: scale(1.1);
  }
`;

interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}

function Button({ children, bg, color }: ButtonProps) {
  return <Btn bg={bg} color={color}>{children}</Btn>;
}

export default Button;
