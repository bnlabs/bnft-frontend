import React from "react";
import styled from "styled-components";
import discordSVG from "../../images/discord.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const LoginContainer = () => {
    return <Container>
        <Square>
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

export default LoginContainer;