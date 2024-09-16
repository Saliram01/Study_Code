import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    // Navbar
    <div className="w-full">
      <div className="max-w-[1320px] mx-auto h-16 px-4 justify-between flex items-center text-white">
        <Link to={"/"}>
          <h1 className="font-bold text-xl">Portfolio</h1>
        </Link>
        <ul className="hidden sm:grid grid-flow-col place-content-center content-center gap-12 cursor-pointer font-bold">
          <Link to={"/"}>
            <li className="hover:text-purple-900">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-purple-900 ">About</li>
          </Link>
          <Link to={'/project'}>
            <li className="hover:text-purple-900 ">Project</li>
          </Link>
          <Link to={"/blog"}>
            <li className="hover:text-purple-900 ">Blog +</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:text-purple-900 ">Contact</li>
          </Link>
        </ul>
        <p className="sm:hidden text-3xl text-end">&#8801;</p>
      </div>
    </div>
  );
}

export default Header;
