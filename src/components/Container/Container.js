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

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
// `;

const SquareImage = ({ src, alt }) => {
  return (
    <Container>
      <Square>
        {/* <Image src={src} alt={alt} /> */}
        <BnftLogo length="40vh"/>
        <ResolutionSelection/>
        <Button/>
      </Square>
    </Container>
  );
};

export default SquareImage;