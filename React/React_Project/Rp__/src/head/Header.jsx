import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [projectNav, setProjectNav] = useState(false);

  return (
    // Navbar
    <div className="w-full">
      <div className="max-w-[1320px] mx-auto h-16 px-4 justify-between flex items-center text-white">
        <Link to={"/"}>
          <h1 className="font-bold text-xl">Portfolio</h1>
        </Link>
        <ul className="hidden sm:grid grid-flow-col place-content-center content-center gap-12 cursor-pointer font-bold">
          <Link to={"/"}>
            <li className="hover:text-purple-500 focus:text-yellow-500">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-purple-800 ">About</li>
          </Link>
          <Link onClick={() => setProjectNav(!projectNav)}>
            <li className="hover:text-purple-800 ">Project</li>
          </Link>
          <Link to={"/blog"}>
            <li className="hover:text-purple-800 ">Blog +</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:text-purple-800 ">Contact</li>
          </Link>
        </ul>
        <p className="sm:hidden text-3xl text-end">&#8801;</p>
      </div>

      {/* mini nav */}
      <div className={`w-full fixed ${projectNav ? "" : "hidden"}`}>
        <ul className="max-w-[1320px] mx-auto hidden px-4  sm:flex  text-pink-500 space-x-3">
          <li className="cursor-pointer hover:text-purple-800">Bg-changer |</li>
          <li className="cursor-pointer hover:text-purple-800">Bg-changer |</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
