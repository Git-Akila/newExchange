import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slicers/userSlice";

import loginSlice from "../Slicers/loginSlice";

const store=configureStore({
    reducer:{
        userlist:userSlice,
        login:loginSlice,

    }
})

export default store;