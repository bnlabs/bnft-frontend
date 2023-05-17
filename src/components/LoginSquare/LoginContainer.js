import React from "react";
import styled from "styled-components";
import discordSVG from "../../images/discord.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoginContainer = () => {
    return <Container>
        <Square>
          <BackGroundImage></BackGroundImage>
          <img src={discordSVG} alt="discordSVG" height="300vh" width="300"/>
          <Link to="https://discord.com/api/oauth2/authorize?client_id=1040068504826675251&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=code&scope=identify">
            <Button content="Login With Discord" color="#7e4ed4"/>
          </Link>
        </Square>
    </Container>
}


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
  background-color: #393dac;
  filter: blur(1px);
  z-index: -1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
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

export default LoginContainer;