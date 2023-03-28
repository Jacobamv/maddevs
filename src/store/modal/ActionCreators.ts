import { AppDispatch } from "store";
import { Person } from "store/models/modal";
import { modalSlice } from "./ModalSlice";

export class ModalActions {
  static enableModal(person: Person) {
    return (dispatch: AppDispatch) => {
      dispatch(modalSlice.actions.setIsActive(true));
      dispatch(modalSlice.actions.setPerson(person));
    };
  }

  static disableModal() {
    return (dispatch: AppDispatch) => {
      dispatch(modalSlice.actions.setIsActive(false));
    };
  }
}
