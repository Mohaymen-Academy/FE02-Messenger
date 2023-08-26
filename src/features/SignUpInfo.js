import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  password: null
};

const signupinfo = createSlice({
  name: 'signupinfo',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      console.error(action.payload);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    }
  }
});
export const { setInfo } = signupinfo.actions;
export default signupinfo.reducer;
