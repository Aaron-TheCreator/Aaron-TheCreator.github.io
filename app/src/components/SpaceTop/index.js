import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  // width: 100%;
  // height: 100%;
  // top: 1;
  // left: 1;
  margin: 5%;
  align-self: start;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const NameContainer = styled.div`
  margin: 0;
  height: auto;
  width: 120%;
  text-align: center;
  font-family: Inconsolata, monospace;
  font-size: 1.3rem;
  color: white;
  border: 4px solid #29750f;
  border-radius: 5%;
  transition: all 0.4s ease 0s;
  &:hover {
    background-color: #black;
    background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
    border: 4px solid #47443f;
    color: white;
    transition: all 0.4s ease 0s;
  }
  &:after {
    content: "";
    position: absolute;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 0.15),
      rgba(black, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

const Overlay = () => {
  return (
    <Container>
      <NameContainer>
        <a href="https://www.github.com/Aaron-TheCreator">
          <pre>
            <output>
              <h1>A. Aaron Burns</h1>
            </output>
          </pre>
        </a>
      </NameContainer>
    </Container>
  );
};

export default Overlay;
