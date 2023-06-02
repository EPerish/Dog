import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialValues";

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialData.filter,
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload
    }
  }
})

export const { changeSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;