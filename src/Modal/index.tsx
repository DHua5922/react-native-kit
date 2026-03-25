import React from "react";
import ModalParent from "./Modal";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";

interface Modal extends React.FC<any> {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Title: typeof ModalTitle;
}

const Modal = ModalParent as unknown as Modal;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;

export default Modal;
