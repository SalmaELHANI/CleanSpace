import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    id: null,
    username: "",
    email: "",
    role: "", 
    isAuthenticated: false,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.id = null;
      state.username = "";
      state.email="";
      state.role = ""; 
      state.isAuthenticated = false;
    },
  },
});

export const { setAdmin, logout } = adminSlice.actions;
export default adminSlice.reducer;
