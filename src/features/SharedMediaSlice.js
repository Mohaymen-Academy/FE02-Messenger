import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';


const initialState = {
    images: [],
    videos: [],
    files: [],
    links: [],
    audios: [],
    voises: [],
    preview: { Open: false, mediaID: 0 }
};

const GetSharedMedia = createAsyncThunk('SharedMedia/getSharedMedia', async (chatID) => {
    const data = await Requests().GetSharedMedia(chatID);
    return data.data;
});

const SharedMedia = createSlice({
  name: 'SharedMedia',
  initialState,
  reducers: {
    SetPreview: (state, action) => {
        state.preview = action.payload;
    }
    
  },
  extraReducers: (builder) =>
    builder
        .addCase(GetSharedMedia.fulfilled, (state, action) => {
            console.log(action.payload);
            state.images = action.payload;
            // state.videos = action.payload.videos;
            // state.files = action.payload.files;
            // state.links = action.payload.links;
            // state.audios = action.payload.audios;
            // state.voises = action.payload.voises;
        }
        )
    
});
export { GetSharedMedia};
export const { SetPreview } = SharedMedia.actions;
export default SharedMedia.reducer;
