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
    <div className="containerHome min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="w-full sm:w-3/5 flex flex-col sm:flex-row">
        {/* CONTAINER 1 */}
        {/* CONTAINER 1 */}
        <div className="sm:w-1/2  flex flex-col justify-center items-center">
          {/*  */}
          <div className="w-full sm:h-[200px] flex flex-col justify-evenly items-center sm:items-start ">
            <h2 className="p-2 sm:text-lg md:text-2xl font-normal">HOLA SOY</h2>
            <h1 className="p-2 text-2xl md:text-3xl font-bold">
              Leandro Mortarini
            </h1>
            <h2 className="p-2 sm:text-xl md:text-2xl">Full Stack Developer</h2>
            <h3 className="p-2 sm:text-xl md:text-2xl text-violeta">
              leandromortarini2@gmail.com
            </h3>
          </div>

          <div className="sm:w-full h-20 flex justify-start ">
            <button className="">
              {" "}
              <Image src={GitHub} alt="" className="w-7 sm:w-8 md:w-10 ml-2" />
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
        </div>
        <div className="md:w-1/2  flex justify-center items-center ">
          <div className="sm:w-1/2 ">
            <Image
              src={Perfil}
              alt=""
              className="ImgPerfil w-40 mb-10 sm:w-3/4 md:w-full sm:mt-20 opacity-80 z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
