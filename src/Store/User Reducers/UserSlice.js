import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null
};

// User actions (Async thunks)
export const LogOut = createAsyncThunk("user/logout", async () => {
    return null;
});

export const registerUser = createAsyncThunk("user/registerUser", async (userData) => {
    return userData;
});

export const loginUser = createAsyncThunk("user/loginUser", async (userdata) => {
   return userdata;
});

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle login
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });

        // Handle logout
        builder.addCase(LogOut.fulfilled, (state) => {
            state.user = null; // Clear user data on logout
            state.loading = false;
            state.error = null;
        });

        // Handle registration
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });
    }
});

export default UserSlice.reducer;
