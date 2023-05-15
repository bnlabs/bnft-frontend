import React, { useEffect } from 'react';
import BnftNavBar from './BnftNavBar.js';
import styled from 'styled-components/macro';
import CatPicContainer from './CatPicGenerator/CatPicContainer.js';
import { useSelector } from 'react-redux';
import LoginContainer from './LoginSquare/LoginContainer.js';

const HomePage = () =>
{
  const user = useSelector((state) => state.user);
  useEffect(() => {
      // const urlParams = new URLSearchParams(window.location.search);
      // const dataParam = urlParams.get('user');
      // if (dataParam) {
      //   setUser(JSON.parse(dataParam));
      // }

    }, [user.id]);
  
  console.log("is logged in: " + (user.id != null));
  if(user.id != null){
    return <Parent>
      <BnftNavBar user={user}/>
      <CatPicContainer/>
    </Parent>
  }
  else{
    return <Parent>
        <BnftNavBar/>
        <LoginContainer/>
      </Parent>
  };

};




// https://www.pixelstalk.net/wp-content/uploads/images6/1440p-Wallpaper-Desktop.jpg
// https://cdn.discordapp.com/attachments/816329783846633493/1107475128683593771/Artboard_5.png
const Parent =  styled.div`
  background: url('https://www.pixelstalk.net/wp-content/uploads/images6/1440p-Wallpaper-Desktop.jpg');
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export default HomePage;