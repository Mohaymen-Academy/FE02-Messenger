import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {
  jwt: '',
  profileData: {}
};
const registerUserProfile = createAsyncThunk('profile/sendRegisterData', async (body) => {
  try {
    const data = await Requests().Register(body);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

const loginUserProfile = createAsyncThunk('profile/sendLoginData', async (body) => {
  try {
    const data = await Requests().Login(body);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearLogin: (state) => {
      state.jwt = initialState.jwt;
      localStorage.removeItem();
      console.log('hello');
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUserProfile.fulfilled, (state, action) => {
        if (action.payload.jwt) {
          state.jwt = action.payload.jwt;
          state.profileData = action.payload.profile;
        } else {
          throw { error: 'wrong infos' };
        }
      })
      .addCase(loginUserProfile.fulfilled, (state, action) => {
        if (action.payload.jwt) {
          state.jwt = action.payload.jwt;
          state.profileData = action.payload.profile;
        } else {
          throw { error: 'didnt logged' };
        }
      })
});
export const { clearLogin } = profileSlice.actions;
export { registerUserProfile, loginUserProfile };
export default profileSlice.reducer;
