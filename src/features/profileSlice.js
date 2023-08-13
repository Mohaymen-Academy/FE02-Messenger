import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';
import { redirect,useLocation,useNavigate } from 'react-router-dom';

const initialState = {
  jwt: '',
  profileData: {}
};
const registerUserProfile = createAsyncThunk('profile/sendRegisterData', async (body) => {
  console.log(body);
  try {
    const data = await Requests().Register(body);
    console.log(data.data);
    return data.data;
  } catch (error) {}
});

const loginUserProfile = createAsyncThunk('profile/sendLoginData', async (body) => {
  console.log(body);
  try {
    const data = await Requests().Login(body);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});
const profileSlice = createSlice({
  name: 'profile',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(registerUserProfile.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.profileData = action.payload.profile;
        // console.log('werewr');
        // const nav=useNavigate();
        // nav('/login')
        // navigate('');
        
      })
      .addCase(loginUserProfile.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.profileData = action.payload.profile;
      })
});
export { registerUserProfile, loginUserProfile };
export default profileSlice.reducer;
