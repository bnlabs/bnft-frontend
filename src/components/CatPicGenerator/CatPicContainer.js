import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from './Button';
// import ResolutionSelection from './ResolutionSelection.js';
import BnftLogo from "../BnftLogo";
import { useSelector } from "react-redux";
import data from '../../colors.json';
import { exportAsImage } from "./ExportAsImage";
import ToggleButton from "./ToggleButton.js";
import downloadIcon from '../../images/download-icon.svg';
import diceIcon from '../../images/dice.svg';
import magicWand from '../../images/magic-wand.svg';

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

const CatPicContainer = () => {
  const [insideColor, setInsideColor] = useState("#2f81f7");
  const [outlineColor, setOutlineColor] = useState("#161b22");
  const [bgColor, setBgColor] = useState("gray");
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
          setBgColor(randomColor());
        }, 500);
      
      return () => clearTimeout(timer);
    }
  },[insideColor, outlineColor, bgColor, changingColorToggle]);


  
  return (<>
    <Container>
      <Square>
        <BackGroundImage></BackGroundImage>
          <div ref={svgRef}>
            <BnftLogo id="downloadable-component" length="40vh" color={insideColor} outlineColor={outlineColor} bgColor={bgColor} backgroundOn={true}/>
          </div>
          {/* <ResolutionSelection/> */}
          <Button content="Generate" color="#5a39d0" image={magicWand} func={() => handleClick()}/>
          <Button content="Download" color="#006374" image={downloadIcon} func={() => exportAsImage(svgRef.current,"bnft")}/>
          <Button content="Randomize" color="#2156c0" image={diceIcon} func={() => handleRandomColor()}/>
          <ToggleButton func={() => setChangingColorToggle(!changingColorToggle)}/>
      </Square>
    </Container>
  </>);
};

const Container = styled.div`
  padding: 2vh;
  display: flex;
  justify-content: center;
  `;



const BackGroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: #393dac;
  filter: blur(3px);
  z-index: -1;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1); /* Adjust the opacity as needed */
`;

const Square = styled.div`
  position: relative;
  width: 70vh;
  height: 70vh;
  border-radius: 20px;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
`;

export default CatPicContainer;