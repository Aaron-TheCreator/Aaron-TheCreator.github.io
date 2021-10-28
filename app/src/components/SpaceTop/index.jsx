import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    // width: 100%;
    // height: 100%;
    // top: 1;
    // left: 1;
    margin: 5%;
    align-self: center;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

const NameContainer = styled.div`
    margin: 0;
    background-color: #29750f;
    height: auto;
    color: #a7adba
`;

const Overlay = () => {
    return (
        <Container>
            <NameContainer>
                <h1>A. Aaron Burns</h1>
            </NameContainer>
        </Container>
    );
};

export default Overlay;