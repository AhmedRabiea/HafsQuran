import React from "react";

const RegisterWelcome = (props) => {
  if (!props.visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="text-xl font-bold text-homeItem py-20 px-40 rounded-lg bg-white mx-auto">
        Welcome
      </div>
    </div>
  );
};

export default RegisterWelcome;
