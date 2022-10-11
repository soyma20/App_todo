import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IResponse} from '../../interfaces/response.interface';

interface IState {
  response: IResponse;
}

let initialState: IState = {
  response: {
    limit: 5,
    todos: [],
    skip: 0,
    total: NaN,
  },
};

const getAll = createAsyncThunk<IResponse, number>(
  'todoSlice/getAll',
  async (skip: number) => {
    const data = fetch(
      `https://dummyjson.com/todos?limit=5&skip=${skip}`,
      // 'https://dummyjson.com/todos?limit=5',
    ).then(res => res.json());
    return data;

    // const {data} = await todoService.getAll();
    // return data;
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
