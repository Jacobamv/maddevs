import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const reducer = combineReducers({});

export const store = configureStore({ reducer });

export const setupStore = () => store;

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore["dispatch"];
