import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {};
const fetchUserProfile = createAsyncThunk('profile/fetchProfileData', () => {
  const data = Requests();
});
const profileSlice = createSlice({
  name: 'profile',
  initialState,

  extraReducers: (builder) =>
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      console.log(action.payload);
    })
});

export default profileSlice.reducer;
