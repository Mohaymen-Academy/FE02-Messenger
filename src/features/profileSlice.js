import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {};
const registerUserProfile = createAsyncThunk('profile/fetchProfileData', () => {
  const data = Requests();
});
const profileSlice = createSlice({
  name: 'profile',
  initialState,

  extraReducers: (builder) =>
    builder.addCase(registerUserProfile.fulfilled, (state, action) => {
      console.log(action.payload);
    })
});

export default profileSlice.reducer;
