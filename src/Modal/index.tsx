import ModalParent from "./Modal";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import createCompoundComponent from "../internal/createCompoundComponent";

const Modal = createCompoundComponent(ModalParent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Title: ModalTitle,
});

export default Modal;
