import React from "react";
import styled, { keyframes } from 'styled-components/macro';

const Button = () => {
    return <StyledButton onClick={()=>console.log("clicked")}>
        Generate
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
  background-color: purple;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    animation: ${shake} 0.5s;
  }
`;

export default Button;