import styled from "styled-components";
import LogoImgOne from "../assets/logo1.png";
import LogoImgTwo from "../assets/logo2.png";
const Logo = styled.img`
  height: ${(props) => (props.gameStatus === "game" ? "100%" : "50%")};
`;

const HeaderWrapper = styled.header`
  height: ${(props) => (props.gameStatus === "game" ? "150px" : "300px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Header({ gameStatus }) {
  return (
    <HeaderWrapper gameStatus={gameStatus}>
      <Logo gameStatus={gameStatus} src={LogoImgOne} />
      <Logo src={gameStatus === "game" ? "" : LogoImgTwo} />
    </HeaderWrapper>
  );
}

