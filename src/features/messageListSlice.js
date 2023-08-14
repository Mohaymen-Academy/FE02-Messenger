import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Worker from '../Workers/web/RequestHandler';
import WorkerBuilder from '../Workers/web/WorkerBuilder';

const getMessgeList = createAsyncThunk('messageList/GetMessageList', (_, thunkApi) => {
  console.log('hello2');
  console.log(thunkApi.getState());
  //   const worker = new WorkerBuilder(Worker);
  //   worker.postMessage('ewe');
  //   return new Promise((resolve) => {
  //     worker.onmessage = (msg) => resolve(msg);
  //   });
});

const initialState = {
  messages: []
};

const messageListSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      // console.log(action.payload.chatDisplayList)
      state.messages = action.payload.chatDisplayList;
      // state.messages.push(action.payload.chatDisplayList);
    }
  }
  //   extraReducers: (builder) =>
  //     builder.addCase(getMessgeList.fulfilled, (state, action) => {
  //       console.log('hello');
  //       state.messages.push(action.payload);
  //     })
});
export const { setMessages } = messageListSlice.actions;
export default messageListSlice.reducer;
