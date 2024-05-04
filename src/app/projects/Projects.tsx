import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import codeImg from "@/assets/code.svg";
import projectImg from "@/assets/Project1.png";
import gitHubImg from "@/assets/gitHubWhite.png";
import vercelImg from "@/assets/vercel.png";
import AppMovies from "@/assets/AppMovies.jpg";
import ShiftManager from "@/assets/gestorTurnos.jpg";
import Ecommerce from "@/assets/Project1.png";
import Link from "next/link";

export const Projects = () => {
  return (
    <>
      <div className="containerHome w-full min-h-screen flex flex-col items-center ">
        <NavBar />
        <div className="w-3/4 mt-5 mb-5 xl:h-[150px] flex items-center sm:items-end justify-center sm:justify-normal  ">
          <h2 className="text-xl text-center sm:text-2xl lg:text-4xl  lg:text-start xl:text-5xl   Title  text-teal-500 opacity-50">
            Projects
          </h2>
          <Image
            src={codeImg}
            alt=""
            className="w-6 lg:w-10 xl:w-12 opacity-50"
          />
        </div>
        {/* CARDS */}
        <div className="w-full flex  flex-wrap justify-evenly ">
          {" "}
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
            <Image
              src={Ecommerce}
              alt=""
              className="w-full md:w-1/3 h-full opacity-80 "
            />
            <div className="flex flex-col justify-center items-center">
              {" "}
              <h2 className="  mt-2  lg:text-lg xl:font-semibold">
                E-Commerce
              </h2>
              <p className="md:text-sm lg:text-md p-2 xl:pl-5 xl:pr-5 ">
                <span className="text-teal-500">
                  Next Js | Tailwind | Typescript | Context
                </span>{" "}
                <br />
                Esta app la realize para el cuarto modulo del bootcamp Henry,es
                un e-commerce de productos tecnologicos la cual permite
                registrarce y loguearse con autenticacion de Token, seleccionar
                un producto, ver sus detalles, agregarlo al carro y gestionar la
                orden.
              </p>
              <div className="w-full md:w-1/4 m-2 flex justify-center items-center">
                <Link href="https://github.com/leandromortarini2/e-commerce.git">
                  <button>
                    <Image
                      src={gitHubImg}
                      alt=""
                      className=" w-8 mr-4 shadow-lg ImgCards "
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
            <Image
              src={ShiftManager}
              alt=""
              className="w-full md:w-1/3 h-full opacity-80 "
            />
            <div className="flex flex-col justify-center items-center">
              {" "}
              <h2 className="  mt-2  lg:text-lg xl:font-semibold">
                Shift Manager
              </h2>
              <p className="md:text-sm lg:text-md p-2 xl:pl-5 xl:pr-5 ">
                <span className="text-teal-500">
                  React | React Router | Redux | Postgree | Javascript |
                  Typescript |
                </span>{" "}
                <br />
                Proyecto realizado en el Bootcamp Henry para el tercer modulo.
                La App es un gestor de turnos para una clinica dental, que
                permite registrarce, loguearse , solicitar turnos y cancelarlos.
              </p>
              <div className="w-full md:w-1/4 m-2 flex justify-center items-center">
                <Link href="https://github.com/leandromortarini2/ShiftManager.git">
                  {" "}
                  <button>
                    <Image
                      src={gitHubImg}
                      alt=""
                      className=" w-8 mr-4 shadow-lg ImgCards "
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
            <Image
              src={AppMovies}
              alt=""
              className="w-full md:w-1/3 h-full opacity-80 "
            />
            <div className="flex flex-col justify-center items-center">
              {" "}
              <h2 className="  mt-2  lg:text-lg xl:font-semibold">
                App Movies
              </h2>
              <p className="md:text-sm lg:text-md p-2 xl:pl-5 xl:pr-5 ">
                <span className="text-teal-500">
                  HTML | Css | Javascript | Bootstraps{" "}
                </span>{" "}
                <br />
                Esta app la realize para el segundo modulo del bootcamp Henry,es
                una app simple que contiene solicitudes a la data base, mapeos
                de cards y un formulario para poder crear nuevas peliculas.
              </p>
              <div className="w-full md:w-1/4 m-2 flex justify-center items-center">
                <Link href="https://github.com/leandromortarini2/MovieApp.git">
                  {" "}
                  <button>
                    <Image
                      src={gitHubImg}
                      alt=""
                      className=" w-8 mr-4 shadow-lg ImgCards "
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
