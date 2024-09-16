import { React, useState } from "react";
import Header from "../head/Header";
import pic from "../assets/sa.jpeg";
import Button from "./Button";
function Home() {
  const [projectList, setProjectList] = useState(false);

  return (
    <>
      <div className="w-full h-screen bg-[#1C0E2B]">
        <Header />
        <div className="grid sm:grid-cols-2 place-content-center  h-[91vh] md:p-2">
          <div className="flex flex-col justify-center lg:pl-40 items-center order-2 sm:order-1 text-white">
            <h1 className="text-md lg:text-2xl">Hi,I am saliram chaudhary.</h1>

            <h2 className="py-2 text-center text-2xl text-bold sm:text-5xl lg:text-6xl">
              A Creative Designer <br /> Based in India.
            </h2>
            <p className="pb-4 md:pb-6 text-center px-4 sm:text-md md:py-4">
              I design and code beautifully simple things and i love  what i do. <br />
              Just simple like that!
            </p>

            <Button />
          </div>

          <div className="grid place-content-center mb-8 sm:order-2 order-1">
            <img
              className="w-40 sm:w-60 md:w-80 border-8 shadow-2xl border-b-green-500"
              src={pic}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
