import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from './Button';
import ResolutionSelection from './ResolutionSelection.js';
import BnftLogo from "../BnftLogo";
import { useSelector } from "react-redux";
import data from '../../colors.json';
import { exportAsImage } from "./ExportAsImage";
import ToggleButton from "./ToggleButton.js";

function getColor(index) {
  return "#" + data[index]['hex'];
};

function randomColor() {
  // Generate a random number between 0 and 16777215
  const randomColor = Math.floor(Math.random() * 16777215);

  // Convert the number to a 6-digit hex string
  const hexColor = randomColor.toString(16).padStart(6, '0');

  // Return the hex color string with a leading '#' character
  return `#${hexColor}`;
};

const SquareImage = () => {
  const [insideColor, setInsideColor] = useState("#2f81f7");
  const [outlineColor, setOutlineColor] = useState("#161b22");
  const [bgColor, setBgColor] = useState("White");
  const [changingColorToggle, setChangingColorToggle] = useState(false);
  const svgRef = useRef();
  const userId = useSelector((state) => state.user.id);

  const lastSixDigitsId = userId.substring(userId.length - 6);

  const bgIndex = parseInt(lastSixDigitsId.substring(0, 2)); // first two digits

  const outlineIndex = parseInt(lastSixDigitsId.substring(2, 4)); // second and third digits

  const fillColorIndex = parseInt(lastSixDigitsId.substring(4, 6)); // last two digits

  const handleClick = () => {
    setBgColor(getColor(bgIndex));
    setOutlineColor(getColor(outlineIndex));
    setInsideColor(getColor(fillColorIndex));
  };

  const handleRandomColor = () =>{
    setBgColor(randomColor(bgIndex));
    setOutlineColor(randomColor(outlineIndex));
    setInsideColor(randomColor(fillColorIndex));
  }

  useEffect(()=> {
    if(changingColorToggle){
      const timer = setTimeout(() => {
          setInsideColor(randomColor());
          setOutlineColor(randomColor());
        }, 500);
      
      return () => clearTimeout(timer);
    }
  },[insideColor, outlineColor, bgColor, changingColorToggle]);


  
  return (
    <Container>
      <Square>
        <div ref={svgRef}>
          <BnftLogo id="downloadable-component" length="40vh" color={insideColor} outlineColor={outlineColor} bgColor={bgColor}/>
        </div>
        <ResolutionSelection/>
        <Button content="Generate" color="#d3467b" func={() => handleClick()}/>
        <Button content="Download" color="#b342cc" func={() => exportAsImage(svgRef.current,"bnft")}/>
        <Button content="Randomize" color="#9C77DE" func={() => handleRandomColor()}/>
        <ToggleButton func={() => setChangingColorToggle(!changingColorToggle)}/>
      </Square>
    </Container>
  );
};

const Container = styled.div`
  padding: 2vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #393dac, #429ebd, transparent);
`;

const Square = styled.div`
  width: 70vh;
  height: 70vh;
  border-radius: 20px;
  padding: 2vh;
  background-color: #393dac;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
`;

export default SquareImage;