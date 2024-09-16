import React from "react";
import data from "../data/Data";
import Header from "../head/Header";
import { Link } from "react-router-dom";

function Blog() {
  const allData = data.map((v, i) => {
    return (
      <Link to={`/blog/${v.id}`}>
        <div
          className="w-60 h-80 p-2 shadow-xl mb-4 bg-white rounded-md cursor-pointer"
          key={i}
        >
          <div className="h-60">
            <img className="" src={v.image} alt="" />
          </div>
          <div>
            <p className="relative bottom-0">{v.model}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="bg-slate-500">
      <Header />
      <div className="w-[1320px] mx-auto py-4">
        <h1 className="text-center pb-6 text-2xl text-white font-bold">
          Electronics Product
        </h1>
        <div className="flex flex-wrap text-center justify-evenly">
          {allData}
        </div>
      </div>
    </div>
  );
}

export default Blog;
