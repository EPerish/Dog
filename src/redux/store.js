import { configureStore } from "@reduxjs/toolkit";
import { getInitialData } from "./initialValues";
import { userReducer } from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        user: userReducer   
    },
    preloadedState: getInitialData()
})

store.subscribe( ()=> localStorage.setItem(REDUX_STATE_SUBSCR,JSON.stringify(store.getState()))