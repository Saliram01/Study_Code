import React, { useState, useEffect } from "react";
import Header from "../head/Header";
import { useParams } from "react-router-dom";
import BlogDetailSimmer from "./BlogDetailSimmer";

function BlogDetail() {
  const [blgos, setBlogs] = useState({});

  const param = useParams();
  const itemId = Number(param.id);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.in/api/products");
      const data = await res.json();
      data.products.map((item) => {
        if (item.id === itemId) {
          setBlogs(item);
        }
      });
    })();
  }, [itemId]);

  return (
    <div className="bg-white">
      <Header />
      <div className="w-full h-screen lg:flex justify-center items-center p-4 lg:px-2 lg:py-8">
        <div className="w-full lg:w-[50%] grid place-content-center place-items-center">
          <img
            className="w-[60%] md:w-[45%] md:mt-8 lg:w-[65%]"
            src={blgos.image}
          />
          <div className="flex-row text-center lg:flex justify-center items-center  my-8">
            <button className="h-[48px] w-44 mb-4 cursor-pointer shadow-xl border text-green-400 rounded-full font-bold">
              ADD TO CART
            </button>
            <button className="h-[48px] w-44 mb-4 mx-8 cursor-pointer bg-green-500 rounded-full text-white font-bold ">
              BUY NOW
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[50%] md:px-12 lg:px-12">
          <div className="">
            <div className="w-full flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">
                <p className="font-bold text-2xl">Name :</p>
                {blgos.title}
              </h1>
              <h2 className="font-bold text-xl">
                <p className="font-bold text-2xl">Brand :</p>
                {blgos.brand}
              </h2>
              <h1 className="font-semibold">
                <p className="font-bold text-2xl">Description :</p>
                {blgos.description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
