import React from "react";
import styled, { keyframes } from 'styled-components/macro';

const Button = (props) => {
  const styles = {
    backgroundColor: props.color
  };

    return <StyledButton onClick={() => props.func() } style={styles}>
        <StyledImage src={props.image} alt="button icon" />
        {props.content}
    </StyledButton>
};

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 2vh;
  padding: 1vh 2vh;
  font-size: 1vw;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 0.5vh;

  &:hover {
    animation: ${shake} 0.5s;
  }
`;

const StyledImage = styled.img`
  height: 2vh;
  width: 3vh;
  padding: .3vh;
`

export default Button;