import React from "react";
import PopupRegisteration from "../PopupRegisteration";

const MyModal = (props) => {
  if (!props.visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white p-1 mx-auto md:mx-0 w-full md:w-auto md:p-10  border-2 rounded-lg z-10 max-h-[90vh] overflow-auto">
        <PopupRegisteration
          handleClose={props.handleClose}
          setShowWelcome={props.setShowWelcome}
        />
      </div>
      <div
        className="overlay absolute w-full h-full"
        onClick={props.handleClose}
      ></div>
    </div>
  );
};

export default MyModal;
