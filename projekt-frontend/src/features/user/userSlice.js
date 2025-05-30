import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.name = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
