import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

//начальный стейт
const initialState = [
   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
   { id: "id-5", name: "Ann Simpson", number: "217-43-26" },
   { id: "id-6", name: "Rosie Copeland", number: "717-91-25" },
   { id: "id-7", name: "Kline Eden", number: "711-51-65" },
];

const rootReducer = (state = initialState, action) => {
   return state;
};

const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer);
