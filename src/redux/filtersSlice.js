import { createSlice } from "@reduxjs/toolkit";
import { state } from "./data";

const filterSlice = createSlice({
   name: "filter",
   initialState: state.filters,
   reducers: {
      changeFilter(state, action) {
         state = action.payload;
      },
   },
});

// генератор экшенов
export const { changeFilter } = filterSlice.actions;

// редюсер слайса
export const filterReducer = filterSlice.reducer;
