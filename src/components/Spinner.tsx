import React, { FC } from "react";
import hourGlass from "../assets/hourglass.gif";

const Spinner: FC = () => {
  return (
    <div className="flex flex-col align-center justify-center text-center">
      <img className="w-24 m-auto" src={hourGlass} alt="Hour Glass" />
      <h2 className="text-gray-500 text-3xl mt-10 mb-6">Loading...</h2>
    </div>
  );
};

export default Spinner;
