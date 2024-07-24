import { createSlice } from "@reduxjs/toolkit";
import { state } from "./data";

const contactsSlice = createSlice({
   name: "contacts",
   initialState: state.contacts,
   reducers: {
      addContact(state, action) {
         state.push(action.payload);
      },
      deleteContact(state, action) {
         state.filter((item) => item.id !== action.payload);
      },
   },
});

// генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
