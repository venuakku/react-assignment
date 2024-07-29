import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    // spreads the recieved array in state.data [...prev, ...action.payload]
    addUsers: (state, action) => {
      state.data.push(...action.payload);
    },
  },
});

export const { addUsers } = userSlice.actions;

export default userSlice.reducer;
