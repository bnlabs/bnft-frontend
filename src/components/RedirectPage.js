import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const RedirectPage = () => 
{
    const [accessToken, setToken] = useState(null); // probably shouldnt have access token in useState
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log("code: "+ code);
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
        console.log("accesstoken: " + response.data.access_token);
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
          'Authorization': Authorization
        }
      };
    axios.request(config)
    .then((response) => {
        console.log(response.data);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("avatar", response.data.avatar);

    })
    .catch((error) => {
        console.log(error);
    });

  return (
    <>
        <Navigate replace to="/" />
    </>
  );
}

export default RedirectPage;