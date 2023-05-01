import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { actions } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const RedirectPage = () => 
{
    const dispatch = useDispatch();
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    let Authorization;
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
        console.log("accesstoken: " + response.data.access_token);
        Authorization = "Bearer " + response.data.access_token;
        console.log("authorization: " + Authorization);

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://discord.com/api/users/@me',
            headers: { 
              'Authorization': Authorization,
              'Cookie': '__cfruid=793af92538d5895fcdd2d6335977de3d03d67f3e-1682478671; __dcfduid=6c80db3e60c711ed9652dee85986634c; __sdcfduid=6c80db3e60c711ed9652dee85986634c06efe9956e08f75ca048cccec815fd73206d374181c64f32608bde90b544b417'
            }
          };
        axios.request(config)
        .then((response) => {
            console.log(response.data);
            console.log("username: " + response.data.username);
            dispatch(actions.setUser({
              username: response.data.username,
              id: response.data.id,
              avatar: response.data.avatar
            }));
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("userId", response.data.id);
            localStorage.setItem("avatar", response.data.avatar);
        })
        .catch((error) => {
            console.log(error);
        });

        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });

  return (
    <>
        <Navigate to="/" />
    </>
  );
}

export default RedirectPage;