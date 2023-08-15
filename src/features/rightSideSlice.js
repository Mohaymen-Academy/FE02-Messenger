import { createSlice } from '@reduxjs/toolkit';
import { NUM_SIDEBAR_CHAT, NUM_SIDEBAR_DEFAULT, NUM_SIDEBAR_SETTINGS } from '../utility/Constants';
const initialState = {
  ParentType: NUM_SIDEBAR_DEFAULT,
  ChildType: 0,
  isOpen: false,
  RightView: NUM_SIDEBAR_CHAT
};

const rightsidemenues = createSlice({
  name: 'rightsideMenues',
  initialState,
  reducers: {
    setParent: (state, action) => {
      state.RightView = action.payload.parent;
    },
    setChild: (state, action) => {
      console.log();
      state.ChildType = action.payload.child;
    },
    setsidebarState: (state, action) => {
      state.isOpen = action.payload.state;
    },
    BackHandler: (state, action) => {
      if (state.ChildType) {
        state.ChildType = 0;
      } else {
        state.RightView = NUM_SIDEBAR_CHAT;
        // state.isOpen = false;
      }
    }
  }
});
export const { setChild, setParent, setsidebarState, BackHandler } = rightsidemenues.actions;
export default rightsidemenues.reducer;
