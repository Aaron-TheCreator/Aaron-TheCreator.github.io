import LoadingSpin from "react-loading-spin";
import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  background-image: radial-gradient(rgba(42, 54, 45, 0.75), black 120%);
  align-items: center;
  justify-content: space-around;
`;

const SpinnerCont = styled.div`
  height: 30%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadText = styled.div`
  color: white;
  font-size: 1rem;
`;
const Fallback = () => {
  return (
    <LoaderContainer>
      <LoadText>
        <h1>Loading A. Aaron Burns Portfolio</h1>
      </LoadText>
      <SpinnerCont>
        <LoadingSpin />
      </SpinnerCont>
      <LoadText>
        <h2>View in Landscape Mode on mobile</h2>
      </LoadText>
    </LoaderContainer>
  );
};

export default Fallback;
