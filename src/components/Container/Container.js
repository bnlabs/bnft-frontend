import React, { useState } from "react";
import styled from "styled-components";
import Button from './Button';
import ResolutionSelection from './ResolutionSelection.js';
import BnftLogo from "../BnftLogo";
import { useEffect } from "react";

const SquareImage = () => {
  const [insideColor, setInsideColor] = useState("#2f81f7");
  const [outlineColor, setOutlineColor] = useState("#161b22");

  useEffect( ()=> {

  },[insideColor,outlineColor]);

  const handleClick = () => {
    console.log("clicked"); 

    setInsideColor("red");
    setOutlineColor("black");
  };
  
  return (
    <Container>
      <Square>
        <BnftLogo length="40vh" color={insideColor} outlineColor={outlineColor}/>
        <ResolutionSelection/>
        <Button func={() => handleClick()}/>
      </Square>
    </Container>
  );
};

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

export default SquareImage;