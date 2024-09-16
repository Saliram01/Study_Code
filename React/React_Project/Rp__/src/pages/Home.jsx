import { React, useState } from "react";
import Header from "../head/Header";
import pic from "../assets/sa.jpeg";
import Button from "./Button";
function Home() {
  const [projectList, setProjectList] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen bg-[#1C0E2B]">
        <Header />
        <div className="w-full h-[90vh] grid md:grid-cols-2 px-4 md:px-8 xl:px-44">
          <div className="text-white grid place-content-center text-center sm:px-34 gap-2 lg:gap-4 xs:order-2 order-1">
            <h1 className="text-xl md:text-2xl font-bold">Hello I'm</h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-green-400">Saliram Chaudhary</h2>
            <p className="text-xl font-bold">Web Developer From Nepal</p>
            <p className="mb-4 font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Iure
              corrupti iusto ea, ut nulla amet.
            </p>
            <div><Button /></div>
          </div>
          <div className="grid place-content-center md:order-2 py-14">
            <img className="w-60 md:w-[280px] lg:w-80 border-8 border-b-green-500" src={pic} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
