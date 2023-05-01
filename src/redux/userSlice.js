import { createSlice } from "@reduxjs/toolkit/";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: null,
    },
    reducers: {
      setName: (state, action) => {
        return action.payload;
      }
    }
  })

export const actions = userSlice.actions;

export default userSlice;