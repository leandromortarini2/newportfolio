import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import codeImg from "@/assets/code.svg";
import projectImg from "@/assets/Project1.png";
import gitHubImg from "@/assets/gitHubWhite.png";
import vercelImg from "@/assets/vercel.png";
import rinDoor from "@/assets/Captura de pantalla 2024-05-31 192422.jpg";
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
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:min-h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
            <Image
              src={rinDoor}
              alt=""
              className="w-full md:w-1/3 h-full opacity-80 "
            />
            <div className="flex flex-col justify-center items-center">
              {" "}
              <h2 className="  mt-2  lg:text-lg xl:font-semibold pt-3">
                Rin|Door
              </h2>
              <p className="md:text-sm lg:text-md p-2 xl:pl-5 xl:pr-5 ">
                <span className="text-teal-500">
                  Next Js | Tailwind | Javascript | OAuth 2.0
                </span>{" "}
                <br />
                Rindoor es una aplicación donde los profesionales se suscriben y
                pueden acceder a trabajos publicados por clientes, estos
                clientes publican sus necesidades de forma gratuita y pueden
                escoger el profesional que deseen dentro de los que se
                postularon para el trabajo.
              </p>
              <div className="w-full md:w-1/4 m-2 flex justify-center items-center ">
                <Link href="https://github.com/leandromortarini2/Rindoor-2.0">
                  <button>
                    <Image
                      src={gitHubImg}
                      alt=""
                      className=" w-8 mr-4 shadow-lg ImgCards "
                    />
                  </button>
                </Link>
                <Link href="https://rindoor-2-0.vercel.app/">
                  <button>
                    <Image
                      src={vercelImg}
                      alt=""
                      className=" w-8 mr-4 shadow-lg ImgCards "
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:min-h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
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
                Esta app la realicé para el cuarto módulo del bootcamp Henry, es
                un e-commerce de productos tecnológicos la cual permite
                registrarse e iniciarse sesión con autenticación de Token,
                seleccionar un producto, ver sus detalles, agregarlo al carro y
                gestionarla Orden.
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
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:min-h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
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
                Proyecto realizado en el Bootcamp Henry para el tercer módulo.
                La App es un gestor de turnos para una clínica dental, que
                permite registrarse, iniciarse sesión, solicitar turnos y
                cancelarlos.
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
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:min-h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
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
                Esta app la realicé para el segundo módulo del bootcamp Henry,
                es una app simple que contiene solicitudes a la data base,
                mapeos de cards y un formulario para poder crear nuevas
                películas.
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
