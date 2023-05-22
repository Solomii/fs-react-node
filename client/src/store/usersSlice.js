import { createSlice } from '@reduxjs/toolkit';
import * as httpClient from '../api';
import { pendingReducer, rejectedReducer, decorateAsyncThunk } from './helpers';

export const createUser = decorateAsyncThunk({
  type: 'users/createUser',
  thunk: httpClient.postUser,
});

export const getAllUsers = decorateAsyncThunk({
  type: 'users/getAllUsers',
  thunk: httpClient.getUsers,
});

export const deleteUser = decorateAsyncThunk({
  type: 'users/deleteUser',
  thunk: httpClient.deleteUser,
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
  },
  reducers: {
    loadUsers (state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(createUser.pending, pendingReducer);
    // builder.addCase(deleteUser.pending, pendingReducer);

    builder.addCase(getAllUsers.rejected, rejectedReducer);
    builder.addCase(createUser.rejected, rejectedReducer);
    // builder.addCase(getAllUsers.rejected, rejectedReducer);

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users.unshift(action.payload);
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users.filter(user => user.id !== action.payload.user.id);
    });
  },
});

const {
  reducer,
  // actions: { loadUsers },
} = usersSlice;

export default reducer;
