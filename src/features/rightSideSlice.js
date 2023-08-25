import { createSlice } from '@reduxjs/toolkit';
import {
  NUM_SIDEBAR_CHAT,
  NUM_SIDEBAR_DEFAULT,
  NUM_SIDEBAR_MENU,
  NUM_SIDEBAR_SETTINGS
} from '../utility/Constants';
const initialState = {
  ParentType: NUM_SIDEBAR_DEFAULT,
  ChildType: 0,
  isOpen: true,
  RightView: NUM_SIDEBAR_CHAT
};

const rightsidemenues = createSlice({
  name: 'rightsideMenues',
  initialState,
  reducers: {
    setParent: (state, action) => {
      state.ParentType = action.payload.parent;
    },
    setChild: (state, action) => {
      state.ChildType = action.payload.child;
    },
    setsidebarState: (state, action) => {
      state.RightView = state.RightView == NUM_SIDEBAR_CHAT ? NUM_SIDEBAR_MENU : NUM_SIDEBAR_CHAT;
    },
    setParentDefault: (state, action) => {
      state.ParentType = NUM_SIDEBAR_DEFAULT;
    },
    BackHandler: (state, action) => {
      state.RightView = NUM_SIDEBAR_CHAT;
    },
    clearEverything: (state, action) => {
      state.ParentType = NUM_SIDEBAR_DEFAULT;
      state.ChildType = 0;
      state.isOpen = false;
      state.RightView = NUM_SIDEBAR_CHAT;
    }
  }
});
export const {
  setChild,
  setParent,
  setsidebarState,
  BackHandler,
  clearEverything,
  setParentDefault
} = rightsidemenues.actions;
export default rightsidemenues.reducer;
