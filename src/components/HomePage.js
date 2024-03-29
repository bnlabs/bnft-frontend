import React, { useEffect } from 'react';
import BnftNavBar from './BnftNavBar.js';
import styled from 'styled-components/macro';
import CatPicContainer from './CatPicGenerator/CatPicContainer.js';
import { useSelector } from 'react-redux';

const HomePage = () =>
{
  const user = useSelector((state) => state.user);
  useEffect(() => {

    }, []);
  

  if(true){
    return <>
        <BackGroundImage/>
        <Parent>
        <BnftNavBar user={user}/>
        <CatPicContainer/>
        </Parent>
    </>
  }

};


const BackGroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("https://cdn.discordapp.com/attachments/835698638788362250/1107792052973994004/background.png");
  background-repeat: repeat;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust the opacity as needed */
  filter: blur(5px);
`;


const Parent = styled.div`
  position: relative;
  background-repeat: repeat;
  height: 100vh;
`;

// const Parent =  styled.div`
//   background: url('https://cdn.discordapp.com/attachments/835698638788362250/1107792052973994004/background.png') repeat;
//   background-color: black;
//   background-size: contain;
//   background-position: center;
//   height: 100vh;
// `;

export default HomePage;