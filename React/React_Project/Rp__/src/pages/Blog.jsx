import React, { useEffect, useState } from "react";
import Header from "../head/Header";
import { Link } from "react-router-dom";
import CardSearchBar from "./CardSearchBar";
import CardSelectMenu from "./CardSelectMenu";

function Blog() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const [data, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
      });
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <div className="w-full ">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex justify-between items-center my-12 px-2">
            <CardSearchBar fun1={setSearch} />
            <CardSelectMenu f2={setSelect} />
          </div>
          <div className="flex flex-wrap text-center justify-evenly">
            {data
              .filter((sel) => {
                return sel.brand.includes(select);
              })
              .filter((item) => {
                return item.model.toLowerCase().includes(search);
              })
              .map((v, i) => {
                return (
                  <Link to={`/blog/${v.id}`} key={i}>
                    <div
                      className="w-64 h-80 p-4 shadow-xl mb-4 bg-white rounded-md cursor-pointer">
                      <div className="h-60">
                        <img className="" src={v.image} alt="" />
                      </div>
                      <div>
                        <p>{v.model}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
