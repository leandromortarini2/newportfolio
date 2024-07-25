import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import Perfil from "@/assets/perfil.png";
import codeImg from "@/assets/code.svg";

const About = () => {
  return (
    <>
      <div className="containerHome w-full min-h-screen flex flex-col items-center ">
        <NavBar />
        <div className="w-3/4 mt-5 mb-5 xl:h-[150px] flex items-center sm:items-end justify-center sm:justify-normal  ">
          <h2 className="text-xl text-center sm:text-2xl lg:text-4xl  lg:text-start xl:text-5xl   Title  text-teal-500 opacity-50">
            About
          </h2>
          <Image
            src={codeImg}
            alt=""
            className="w-6 lg:w-10 xl:w-12 opacity-50"
          />
        </div>

        {/* container */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center  ">
          {/* IMAGE VIEW MOVILE */}
          <div className="w-full sm:w-1/4  md:hidden flex justify-center items-center">
            <div className="w-10 h-10  bg-teal-800  rounded-full ballMovile z-0 "></div>
            <Image
              src={Perfil}
              alt=""
              className="ImgPerfil w-40 sm:w-3/4 sm:ml-9 md:m-0  z-20"
            />
          </div>
          {/* CONTAINER TEXT */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-center sm:text-md xl:text-lg xl:text-justificado  font-semibold p-6 xl:p-20  ">
              Hola! Soy Leandro Mortarini y me formé como
              <br />
              <span className="text-teal-500 lg:text-xl xl:text-2xl">
                Full Stack Developer con especialización en Front End.
              </span>{" "}
              <br />
              Mi experiencia se centra en tecnologías como{" "}
              <span className="text-teal-500">
                React, TypeScript, Javascript, Tailwind, Node.js, Express, Next,
                entre otras.
              </span>
              <br /> Mi enfoque se centra en crear aplicaciones web modernas y
              altamente funcionales, ofreciendo interfaces responsivas y
              atractivas. Con un firme compromiso, habilidades de trabajo en
              equipo y una gran determinación, garantizo resultados que superan
              las expectativas del cliente.
            </p>
          </div>{" "}
          <div className="hidden  md:flex w-1/4 ">
            <div className="w-20 h-20 bg-teal-800  rounded-full ball z-0 opacity-60"></div>
            <Image
              src={Perfil}
              alt=""
              className="ImgPerfil w-40 sm:w-3/4 md:w-full lg:w-3/4 opacity-100 z-20"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
