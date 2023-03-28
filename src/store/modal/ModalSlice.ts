import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, Person } from "store/models/modal";

const initialState: ModalState = {
  isActive: false,
  image: "",
  name: "",
  qualities: [""],
  description: "",
  color: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
    setPerson(state, action: PayloadAction<Person>) {
      state.image = action.payload.image;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.qualities = action.payload.qualities;
      state.color = action.payload.color;
    },
  },
});

export const modalReducer = modalSlice.reducer;
