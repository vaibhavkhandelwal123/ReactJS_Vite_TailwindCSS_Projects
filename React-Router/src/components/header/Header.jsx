import React from "react";
import { useNavigate } from "react-router";
const header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col items-center bg-gray-700 justify-center text-white text-3xl py-2 m-2">
      <div className="text-3xl">Header</div>
      <div className="text-xl text-amber-700 flex space-x-4">
        <div onClick={() => navigate("/Home")}>home</div>
        <div onClick={() => navigate("/Contact")}>contact</div>
      </div>
    </header>
  );
};

export default header;
