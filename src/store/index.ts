import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/ModalSlice";

export const reducer = combineReducers({ modal: modalReducer });

export const store = configureStore({ reducer });

export const setupStore = () => store;

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore["dispatch"];
