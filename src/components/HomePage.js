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

const Parent =  styled.div`
  background-image: url('https://www.pixelstalk.net/wp-content/uploads/images6/1440p-Wallpaper-Desktop.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export default HomePage;