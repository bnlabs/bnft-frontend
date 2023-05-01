import { createSlice } from "@reduxjs/toolkit/";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: localStorage.getItem('username'),
      id: null,
      avatar: null
    },
    reducers: {
      setUser: (state, action) => {
        return action.payload;
      }
    }
  })

export const actions = userSlice.actions;

export default userSlice;