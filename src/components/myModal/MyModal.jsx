import React from "react";
import PopupRegisteration from "../PopupRegisteration";

const MyModal = ({ visible, onClose, onCancel }) => {
  if (!visible) return null;

  return (
    <div
      onClick={onClose}
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white p-1 mx-auto md:mx-0 w-full md:w-auto md:p-10  border-2 rounded-lg">
        <PopupRegisteration onClose={onClose} onCancel={onCancel} />
      </div>
    </div>
  );
};

export default MyModal;
