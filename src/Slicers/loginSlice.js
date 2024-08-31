import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjUwOTczNjgsImV4cCI6MTcyNTEwNDU2OH0.MK56hidntk1uGeTv-JMPBkuGKfKTDTvNMyDhEwijpPw";

export const loginUser = createAsyncThunk('loginUser', async () => {
    const res = await fetch("https://demoback.kairaaexchange.com/api/v1/admin/login", {
        method: 'POST',
        body: JSON.stringify({
            email: 'your-email@example.com',
            password: 'your-password',
        }),
        headers: {
            'Authorization': ` ${token}`,  
            'Content-Type': 'application/json',
            'Tag': 'admin'
        }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch user details");
    }
    return res.json();
});

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            console.log("Error", action.error.message);
            state.isError = true;
        });
    },
});

export default loginSlice.reducer;
