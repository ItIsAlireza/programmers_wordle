import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg text-black">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
