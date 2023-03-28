import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { ModalProps } from "components/models";
import { createPortal } from "react-dom";
import { ModalActions } from "store/modal/ActionCreators";
import "./Modal.scss";
import { modalSlice } from "store/modal/ModalSlice";
import "./Modal.scss";
import { useEffect, useState } from "react";
import closeSvg from "assets/icons/close.svg";

export default function Modal({ styles }: ModalProps) {
  const { isActive, name, image, description, qualities, color } =
    useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const [modalStyle, setModalStyle] = useState({
    transform: "translate(0%, 0%)",
    opacity: 1,
    backgroundColor: color,
  });

  useEffect(() => {
    if (isActive) {
      setModalStyle((prev) => {
        return { ...prev, transform: "translate(0%, 0%)", opacity: 1 };
      });
    } else if (!isActive) {
      setModalStyle((prev) => {
        return { ...prev, transform: "translate(0%, 100%)", opacity: 0 };
      });
    }
  }, [isActive]);

  useEffect(() => {
    setModalStyle((prev) => {
      return { ...prev, backgroundColor: color };
    });
  }, [name]);

  return (
    <div style={{ ...styles, ...modalStyle }} className='elements__modal'>
      <img
        src={closeSvg}
        alt='close'
        onClick={() => {
          dispatch(ModalActions.disableModal());
        }}
      />
      <div>
        <img src={image} alt='Profile Picture' />
        <p>{name}</p>
        <p>{description}</p>
        <p>Student of Lazarski University</p>
      </div>
      <div>
        <p>{qualities[0]}</p>
        <p>{qualities[1]}</p>
        <p>{qualities[2]}</p>
      </div>
    </div>
  );
}
