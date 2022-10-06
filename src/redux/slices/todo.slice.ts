import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ITodo} from '../../interfaces';
import {todoService} from '../../services';

interface IState {
  todos: ITodo[];
}

let initialState: IState = {
  todos: [],
};

const getAll = createAsyncThunk<ITodo[], void>('todoSlice/getAll', async () => {
  const {data} = await todoService.getAll();
  return data;
});
const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});
const {reducer: todoReducer} = todoSlice;

const todoActions = {getAll};

export {todoReducer, todoActions};
