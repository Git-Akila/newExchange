import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slicers/userSlice";



const store=configureStore({
    reducer:{
        userlist:userSlice,

    }
})

export default store;