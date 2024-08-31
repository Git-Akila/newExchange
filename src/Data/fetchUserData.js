import { createAsyncThunk } from '@reduxjs/toolkit';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjUxMDg0MzAsImV4cCI6MTcyNTExNTYzMH0.6lTLLFU0uNcL_ekcN0wOXd8vAEWrzex38lMdZoZ5KT4eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjUxMDg2NzgsImV4cCI6MTcyNTExNTg3OH0.4JfnqoUy31Qw-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcHRpb24iOiJhZG1pbl9sb2dpbiIsImlkIjoiNjM0YTllODRjMzlhYzJlZWZhN2ZkNTY1Iiwic3RhdHVzIjp0cnVlLCJpYXQiOjE3MjUxMDg3NjksImV4cCI6MTcyNTExNTk2OX0.5D2_cueb0g3jgIQ7DXXGwHkAamnHWJTd94hX52idJzk";
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
