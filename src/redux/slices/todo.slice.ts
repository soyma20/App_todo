import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {todoService} from '../../services';
import {IResponse} from '../../interfaces/response.interface';

interface IState {
  response: IResponse;
}

let initialState: IState = {
  response: {
    limit: 0,
    skip: 0,
    todos: [],
    total: 0,
  },
};

const getAll = createAsyncThunk<IResponse, void>(
  'todoSlice/getAll',
  async () => {
    const {data} = await todoService.getAll();
    return data;
  },
);
const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.response = action.payload;
    });
  },
});
const {reducer: todoReducer} = todoSlice;

const todoActions = {getAll};

export {todoReducer, todoActions};
