import styled from 'styled-components'

const Btn = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : 'var(--terceary)')};
  color: ${(props) => (props.color ? props.color : 'var(--secondary)')};
  padding: 10px;
  width: 105px;
  height: 38pxpx;
  text-align: center;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover , &:focus, &:active {
    transform: scale(1.1);
  }
`

export default function Button({ children, bg, color }) {
  return (
    <Btn
      bg={bg}
      color={color}
    >
      {children}
    </Btn>
  )
}
