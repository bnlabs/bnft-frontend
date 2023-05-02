import React, { useEffect, useState } from 'react';
import BnftNavBar from './BnftNavBar.js';
import styled from 'styled-components/macro';
import SquareImage from './Container/Container.js';

const HomePage = () =>
{
  const [user, setUser] = useState(null);
  useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const dataParam = urlParams.get('user');
      if (dataParam) {
        setUser(JSON.parse(dataParam));
      }
    }, []);

  return <Parent>
      <BnftNavBar user={user}/>
      <SquareImage src={('https://cdn.discordapp.com/attachments/835698638788362250/1099526793406460056/Artboard_5.png')} alt={"bnft-logo"}/>
  </Parent>
}

const Parent =  styled.div`
  background-image: url('https://www.pixelstalk.net/wp-content/uploads/images6/1440p-Wallpaper-Desktop.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export default HomePage;