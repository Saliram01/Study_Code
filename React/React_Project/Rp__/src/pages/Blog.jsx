import React from "react";
import data from "../data/Data";
import Header from "../head/Header";
import { Link } from "react-router-dom";

function Blog() {
  const allData = data.map((v, i) => {
    return (
      <Link to={`/blog/${v.id}`}>
        <div
          className="w-64 h-80 p-4 shadow-xl mb-4 bg-white rounded-md cursor-pointer"
          key={i}
        >
          <div className="h-60">
            <img className="" src={v.image} alt="" />
          </div>
          <div>
            <p>{v.model}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="bg-white">
      <Header />
      <div className="w-full ">
        <div className="max-w-[1320px] mx-auto pt-4">
          <h1 className="text-center py-6 text-lg font-bold">
            Electronics Product
          </h1>
          <div className="flex flex-wrap text-center justify-evenly">
            {allData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
