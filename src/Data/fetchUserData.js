import { createAsyncThunk } from '@reduxjs/toolkit';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjUxNjc3OTksImV4cCI6MTcyNTE3NDk5OX0.qs2xP5_T1S20SofPO5YQ99wkb3kbZGCmnphaWsaTazk";
export const fetchUser = createAsyncThunk('fetchUser', async () => {
    const res = await fetch("https://demoback.kairaaexchange.com/api/v1/user/list", {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
            'Tag': 'admin'
        }
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch user data');
    }
    
    return res.json();
});
