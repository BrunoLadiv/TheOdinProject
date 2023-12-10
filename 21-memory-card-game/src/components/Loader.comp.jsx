import styled, { keyframes } from "styled-components";
import PokeballSVG from "../assets/loader.svg?url";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.img`
  width: 200px;
  height: 200px;
  animation: ${rotate} 2s linear infinite;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -300px;
`;

const LoaderSVG = () => {
  return (
    <LoaderContainer>
      <Loader src={PokeballSVG} />;
    </LoaderContainer>
  );
};

export default LoaderSVG;
