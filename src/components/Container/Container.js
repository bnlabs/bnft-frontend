import React from "react";
import styled from "styled-components";
import Button from './Button';
import ResolutionSelection from './ResolutionSelection.js';
import BnftLogo from "../BnftLogo";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Square = styled.div`
  width: 70vh;
  height: 70vh;
  border-radius: 20px;
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SquareImage = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  
  return (
    <Container>
      <Square>
        <BnftLogo length="40vh"/>
        <ResolutionSelection/>
        <Button func={() => handleClick()}/>
      </Square>
    </Container>
  );
};

export default SquareImage;