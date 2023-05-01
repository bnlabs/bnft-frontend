import { createSlice } from "@reduxjs/toolkit/";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: localStorage.getItem('username'),
      id: localStorage.getItem('userId'),
      avatar: localStorage.getItem('avatar')
    },
    reducers: {
      setUser: (state, action) => {
        return action.payload;
      }
    }
  })

export const actions = userSlice.actions;

export default userSlice;