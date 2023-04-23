import React, { useEffect, useState } from 'react';
import BnftNavBar from './BnftNavBar.js'

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

    return <>
        <BnftNavBar user={user}/>
    </>
}

export default HomePage;