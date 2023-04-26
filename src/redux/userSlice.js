import { createSlice } from "@reduxjs/toolkit/";

const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: "",
    //   userId: localStorage.getItem('userId'),
    //   avatar: localStorage.getItem('avatar')
    },
    reducers: {
      setName: (state, action) => {
        state.name = action.payload;
        // state.userId = value;
        // state.avatar = value;
      }
    }
  })

export const { setName } = userSlice.actions

export default userSlice.reducer;