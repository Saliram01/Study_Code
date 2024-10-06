import React from "react";
import BackArrow from "../pages/BackArrow";
import { Link } from "react-router-dom";

function Context() {
  return (
    <div className="flex flex-col justify-center items-center h-[65vh]">
      <Link to={'../project'}><BackArrow/></Link>
      <h1 className="font-bold text-2xl text-gray-400">useContext</h1>
      <p>useContext is a react hook that allows you access data from any components without explicit passing it down through props at every level.</p>
    </div>
    
  );
}

export default Context;
