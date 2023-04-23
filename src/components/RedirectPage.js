import React, { useState } from 'react';
import axios from 'axios';

const RedirectPage = () => 
{
    const [accessToken, setToken] = useState(null); // probably shouldnt have access token in useState
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const data = {
        "client_id": "1040068504826675251",
        "client_secret": "z1ThNtfi9kO0zWVWCzm1PdDoNZjixNFr",
        "grant_type": "authorization_code",
        "code" : code,
        "redirect_uri" : "http://localhost:3000/redirect",
        "scope": "identity"
    }
    const headersInput = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    axios.post("https://discord.com/api/oauth2/token", data, 
    {
        headers: headersInput
    })
    .then((response) => {
        setToken(response.data.access_token);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });

    const Authorization = "Bearer " + accessToken;
    console.log("authorization: " + Authorization);

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://discord.com/api/users/@me',
        headers: { 
          'Authorization': Authorization, 
          'Cookie': '__cfruid=b6157b92049cb77108b12daef6b23ca7fe9389cc-1682209650; __dcfduid=6c80db3e60c711ed9652dee85986634c; __sdcfduid=6c80db3e60c711ed9652dee85986634c06efe9956e08f75ca048cccec815fd73206d374181c64f32608bde90b544b417'
        }
      };
    axios.request(config)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

  return (
    <>
        <h4>Redirecting...</h4>
    </>
  );
}

export default RedirectPage;