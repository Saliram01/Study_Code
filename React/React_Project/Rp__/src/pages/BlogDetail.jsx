import React from "react";
import Header from "../head/Header";
import blgos from "../data/Data";
import { useLocation } from "react-router-dom";

function BlogDetail() {
  const uselocation = useLocation();
  let currentId = uselocation.pathname.split("/")[2];
  let currentData = blgos.filter((v) => v.id == currentId)[0];
  return (
    <>
      <div className="w-full h-screen grid grid-cols-2 place-items-center px-32 py-12">
        <div className="grid place-content-center">
          <img className="w-[90%]" src={currentData.image} alt="" />
        </div>
        <div className="">
          <div className="grid grid-cols-[20%_80%]">
            <div className="grid grid-rows-3 place-content-center font-bold  h-96">
              <div>Name : </div>
              <div>Brand : </div>
              <div>Description : </div>
            </div>
            <div className="w-full grid grid-rows-3 h-96 mb-32">
              <h1 className="text-2xl font-semibold">{currentData.title}</h1>
              <h2 className="font-bold text-xl">{currentData.brand}</h2>
              <p className="font-semibold">{currentData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
