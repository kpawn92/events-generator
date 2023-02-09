import ModalBody from '../contents/ModalBody';

const Modal = ({ setModal, children }) => {
	return <ModalBody setModal={setModal}>{children}</ModalBody>;
};

export default Modal;
