import { createSlice } from '@reduxjs/toolkit';
import { NUM_SIDEBAR_CHAT, NUM_SIDEBAR_DEFAULT } from '../utility/Constants';
const initialState = {
  ParentType: NUM_SIDEBAR_CHAT,
  ChildType: 0,
  isOpen: false
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
    backChild: (state, action) => {
      state.ChildType = 0;
    },
    backParent: (state, action) => {
      state.ParentType = 0;
    },
    setsidebarState: (state, action) => {
      state.isOpen = action.payload.state;
    }
  }
});
export const { setChild, setParent, backChild, backParent, setsidebarState } =
  rightsidemenues.actions;
export default rightsidemenues.reducer;
