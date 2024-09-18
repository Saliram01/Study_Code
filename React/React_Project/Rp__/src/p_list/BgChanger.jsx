import React, { useState } from "react";
import Header from "../head/Header";

function BgChanger() {
  const [color, setColor] = useState("gray");
  return (
    <div className="bg-white w-full h-screen">
      <Header />
      <div
        className="max-w-full h-[710px] bg-slate-300 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-[400px] flex flex-col gap-5 px-24">
          <button
            onClick={() => setColor("red")}
            className="text-white py-2 px-8 bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => setColor("gray")}
            className="text-white py-2 px-8 bg-gray-500"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-white py-2 px-8 bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="text-white py-2 px-8 bg-yellow-500"
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
