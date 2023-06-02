import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialValues";
import {REDUX_STATE_SUBSCR} from '../../utils/constants'

const userSlice = createSlice({
    name: 'user',
    initialState: initialData.user,
    reducers: {
      setNewUser(_, action) {
        return action.payload
      },
      clearUser() {
        localStorage.removeItem(REDUX_STATE_SUBSCR)
  
        return initialData.user
      }
    }
  })
  
  export const { setNewUser, clearUser } = userSlice.actions
  export const userReducer = userSlice.reducer