"use client";
import React from "react";
import "./home.css";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import GitHub from "@/assets/png-transparent-github-git-hub-logo-icon-thumbnail.png";
import Linkedin from "@/assets/linkedin.jpg";
import Whatsapp from "@/assets/whatsapp.png";
import Facebook from "@/assets/facebook.png";
import Instagram from "@/assets/instagram.png";
import Perfil from "@/assets/perfil.png";

export const Home = () => {
  return (
    <div className="containerHome w-full min-h-screen flex flex-col items-center ">
      <NavBar />

      {/* IMAGEN CELULAR */}
      <div className="w-1/2 sm:hidden flex justify-center sm:items-end items-center">
        <div className=" ">
          <Image src={Perfil} alt="" className="ImgPerfil w-40 " />
        </div>
      </div>
      {/* container general */}
      {/* container general */}
      {/* container general */}

      <div className="w-full flex justify-around ">
        {/* CONTAINER 1 */}
        {/* CONTAINER 1 */}
        <div className="sm:w-1/2 md:w-1/2 flex flex-col justify-center items-center sm:items-end ">
          {/*  */}
          <div className="sm:w-3/4  flex flex-col justify-evenly items-center sm:items-start  ">
            <h2 className="p-2 sm:text-lg md:text-2xl font-normal  text-justify">
              HOLA SOY
            </h2>
            <h1 className="p-2 sm:text-2xl md:text-5xl font-bold  text-justify">
              Leandro Mortarini
            </h1>
            <h2 className="p-2 sm:text-lg md:text-2xl ">
              Full Stack Developer
            </h2>
            <h3 className="p-2 sm:text-lg md:text-xl text-violeta ">
              leandromortarini2@gmail.com
            </h3>
          </div>

          <div className="sm:w-3/4 h-20 flex justify-start ">
            <button className="">
              {" "}
              <Image src={GitHub} alt="" className="w-7 sm:w-8 md:w-10 " />
            </button>{" "}
            <button>
              {" "}
              <Image
                src={Linkedin}
                alt=""
                className="w-7 sm:w-8 md:w-10 ml-5"
              />
            </button>
            <button>
              {" "}
              <Image
                src={Whatsapp}
                alt=""
                className="w-7 sm:w-8 md:w-10 ml-5"
              />
            </button>
            <button>
              {" "}
              <Image
                src={Facebook}
                alt=""
                className="w-7 sm:w-8 md:w-10 ml-5"
              />
            </button>
            <button>
              {" "}
              <Image
                src={Instagram}
                alt=""
                className="w-7 sm:w-8 md:w-10 ml-5"
              />
            </button>
          </div>

          {/* CONTAINER 2 */}
          {/* CONTAINER 2 */}
        </div>
        <div className="hidden sm:w-1/2  sm:flex justify-center sm:items-end items-center ">
          <div className=" ">
            <Image
              src={Perfil}
              alt=""
              className="ImgPerfil w-40 sm:w-1/2 sm:ml-9 md:m-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
