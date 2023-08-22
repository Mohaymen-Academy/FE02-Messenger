import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {
  images: [],
  videos: [],
  files: [],
  links: [],
  audios: [],
  voises: [],
  preview: { open: false, media: null, messageID: 0 }
};

const GetSharedMedia = createAsyncThunk('SharedMedia/getSharedMedia', async (chatID) => {
  const data = await Requests().GetSharedMedia(chatID);
  return data;
});

const SharedMedia = createSlice({
  name: 'SharedMedia',
  initialState,
  reducers: {
    setPreview: (state, action) => {
      state.preview = action.payload;
    },
    resetPreview: (state) => {
      state.preview = { open: false, mediaID: null, messageID: 0 };
    }
  },
  extraReducers: (builder) =>
    builder.addCase(GetSharedMedia.fulfilled, (state, action) => {
      console.log(action.payload);
      state.images = action.payload.images;
      state.videos = action.payload.videos;
      state.files = action.payload.files;
      state.audios = action.payload.musics;
      state.voises = action.payload.voices;
    })
});
export { GetSharedMedia };
export const { setPreview, resetPreview } = SharedMedia.actions;
export default SharedMedia.reducer;
