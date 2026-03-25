import { createContext } from "react";

const ModalContext = createContext({
  visible: false,
  onRequestClose: () => {},
});

export default ModalContext;
