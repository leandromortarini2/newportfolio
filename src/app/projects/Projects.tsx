/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import codeImg from "@/assets/code.svg";
import Stetic from "@/assets/stetic.jpg";
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
          <h2 className="text-2xl text-center sm:text-2xl lg:text-4xl  lg:text-start xl:text-5xl   Title  text-teal-400 opacity-50">
            Projects
          </h2>
          <Image
            src={codeImg}
            alt=""
            className="w-6 lg:w-10 xl:w-12 opacity-50"
          />
        </div>
        {/* CARDS */}
        <div className="w-full flex  flex-wrap justify-evenly  ">
          {" "}
          {/* Stetic Glam */}
          {/* Stetic Glam */}
          {/* Stetic Glam */}
          <div className="hidden w-full  lg:w-full md:h-[250px]   md:m-3 md:flex  overflow-hidden lg:min-h-[300px] justify-center bg-gray-900  shadow-lg shadow-teal-950">
            <div className="w-1/2 min-h-52  lg:min-h-[300px]  lg:ronunded-2xl">
              <Image
                className="w-full h-full imgEffectRigth"
                src={Stetic}
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:min-h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Stetic Glam
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  <span className="text-teal-500">
                    React | TypeScript | Tailwind | Css
                    <br />
                  </span>
                  Stetic Glam es una estética dirigida por Yohana Campos, una
                  profesional que tiene una dedicación especial hacia sus
                  clientes, quienes son atendidos con cuidado y de manera
                  exclusiva por ella.
                </p>
                <div className="w-full md:w-full m-2 flex justify-end   ">
                  <div className="w-3/4  flex justify-around">
                    <Link href="https://github.com/leandromortarini2/steticGlam">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                    <Link href="https://stetic-glam.vercel.app/">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        Visit Web
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stetic Celu */}
          {/* Stetic Celu */}
          {/* Stetic Celu */}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <Image className="w-full h-52 imgEffectLow" src={Stetic} alt="" />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Stetic Glam
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  <span className="text-teal-500">
                    React | TypeScript | Tailwind | Css
                  </span>{" "}
                  Stetic Glam es una estética dirigida por Yohana Campos, una
                  profesional que tiene una dedicación especial hacia sus
                  clientes, quienes son atendidos con cuidado y de manera
                  exclusiva por ella. <br />
                  <div className="w-full flex flex-col items-center">
                    <Link href="https://github.com/leandromortarini2/steticGlam">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                    <Link href="https://stetic-glam.vercel.app/">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        Visit Web
                      </span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
          {/* card MarvelWorld */}
          {/* card MarvelWorld */}
          <div className="hidden w-full  lg:w-full md:h-[250px]   md:m-3 md:flex  overflow-hidden lg:min-h-[300px] justify-center bg-gray-900  shadow-lg shadow-teal-950">
            <div className="w-1/2 min-h-52  lg:min-h-[300px]  lg:ronunded-2xl">
              <img
                className="w-full h-full imgEffectRigth"
                src="https://i.ibb.co/hXpQ4r6/home2.jpg"
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:min-h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  MarvelWorld
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  <span className="text-teal-500">
                    React | Tailwind | Javascript | CSS <br />
                  </span>
                  MarvelWorld es una aplicación donde se hacen consumo de API
                  REST. Esta aplicación se encuentra en proceso, ya que tendrá
                  un Carrito de compras y método de pago.{" "}
                </p>
                <div className="w-full md:w-full m-2 flex justify-end   ">
                  <div className="w-3/4  flex justify-around">
                    <Link href="https://github.com/leandromortarini2/MarvelWorld">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                    <Link href="https://marvel-world-jet.vercel.app/">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        Visit Web
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card MarvelWorld CELULAR */}
          {/* card MarvelWorld CELULAR*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <img
                className="w-full h-52 imgEffectLow"
                src="https://i.ibb.co/hXpQ4r6/home2.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  MarvelWorld
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  <span className="text-teal-500">
                    React | Tailwind | Javascript | CSS
                  </span>{" "}
                  MarvelWorld es una aplicación donde se hacen consumo de API
                  REST. Esta aplicación se encuentra en proceso, ya que tendrá
                  un Carrito de compras y método de pago. <br />
                  <div className="w-full flex flex-col items-center">
                    <Link href="https://github.com/leandromortarini2/MarvelWorld">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                    <Link href="https://marvel-world-jet.vercel.app/">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        Visit Web
                      </span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
          {/* card RINDOOR */}
          {/* card RINDOOR */}
          <div className="hidden w-full  lg:w-full md:h-[250px]   md:m-3 md:flex  overflow-hidden lg:min-h-[300px] justify-center bg-gray-900  shadow-lg shadow-teal-950">
            <div className="w-1/2 min-h-52  lg:min-h-[300px]  lg:ronunded-2xl">
              <Image
                className="w-full h-full imgEffectRigth"
                src={rinDoor}
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:min-h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Rin|Door{" "}
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  <span className="text-teal-500">
                    Next Js | Tailwind | Javascript | OAuth 2.0
                    <br />
                  </span>
                  Rindoor es una aplicación donde los profesionales se suscriben
                  y pueden acceder a trabajos publicados por clientes, estos
                  clientes publican sus necesidades de forma gratuita y pueden
                  escoger el profesional que deseen dentro de los que se
                  postularon para el trabajo.
                </p>
                <div className="w-full md:w-full m-2 flex justify-end   ">
                  <div className="w-3/4  flex justify-around">
                    <Link href="https://github.com/leandromortarini2/Rindoor-2.0">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                    <Link href="https://rindoor-2-0.vercel.app/">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        Visit Web
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card RINDOOR CELULAR */}
          {/* card RINDOOR CELULAR*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <Image
                className="w-full h-52 imgEffectLow"
                src={rinDoor}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Rin|Door{" "}
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  <span className="text-teal-500">
                    {" "}
                    Next Js | Tailwind | Javascript | OAuth 2.0 <br />
                  </span>{" "}
                  Rindoor es una aplicación donde los profesionales se suscriben
                  y pueden acceder a trabajos publicados por clientes, estos
                  clientes publican sus necesidades de forma gratuita y pueden
                  escoger el profesional que deseen dentro de los que se
                  postularon para el trabajo.
                  <div className="w-full flex flex-col items-center ">
                    <Link href="https://github.com/leandromortarini2/Rindoor-2.0">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                    <Link href="https://rindoor-2-0.vercel.app/">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        Visit Web
                      </span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
          {/* card ECOMMERCE */}
          {/* card ECOMMERCE */}
          <div className="hidden w-full  lg:w-full md:h-[250px]   md:m-3 md:flex  overflow-hidden lg:min-h-[300px] justify-center bg-gray-900  shadow-lg shadow-teal-950">
            <div className="w-1/2 min-h-52  lg:min-h-[300px]  lg:ronunded-2xl">
              <Image
                className="w-full h-full imgEffectRigth"
                src={Ecommerce}
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:min-h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  E-Commerce
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  <span className="text-teal-500">
                    Next Js | Tailwind | Typescript | Context
                    <br />
                  </span>
                  Esta app la realicé para el cuarto módulo del bootcamp Henry,
                  es un e-commerce de productos tecnológicos la cual permite
                  registrarse e iniciarse sesión con autenticación de Token,
                  seleccionar un producto, ver sus detalles, agregarlo al carro
                  y gestionarla Orden.
                </p>
                <div className="w-full md:w-full m-2 flex justify-end   ">
                  <div className="w-3/4  flex justify-around">
                    <Link href="https://github.com/leandromortarini2/e-commerce.git">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card ECOMMERCE CELULAR*/}
          {/* card ECOMMERCE CELULAR*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <Image
                className="w-full h-52 imgEffectLow"
                src={Ecommerce}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  E-Commerce
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  <span className="text-teal-500">
                    {" "}
                    Next Js | Tailwind | Typescript | Context <br />
                  </span>{" "}
                  Esta app la realicé para el cuarto módulo del bootcamp Henry,
                  es un e-commerce de productos tecnológicos la cual permite
                  registrarse e iniciarse sesión con autenticación de Token,
                  seleccionar un producto, ver sus detalles, agregarlo al carro
                  y gestionarla Orden.
                  <div className="w-full flex flex-col items-center ">
                    <Link href="https://github.com/leandromortarini2/e-commerce.git">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
          {/* card SHIFT MANAGER */}
          {/* card SHIFT MANAGER */}
          <div className="hidden w-full  lg:w-full md:h-[250px]   md:m-3 md:flex  overflow-hidden lg:min-h-[300px] justify-center bg-gray-900  shadow-lg shadow-teal-950">
            <div className="w-1/2 min-h-52  lg:min-h-[300px]  lg:ronunded-2xl">
              <Image
                className="w-full h-full imgEffectRigth"
                src={ShiftManager}
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:min-h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  Shift Manager
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  <span className="text-teal-500">
                    React | React Router | Redux | Postgree | Javascript |
                    Typescript | <br />
                  </span>
                  Proyecto realizado en el Bootcamp Henry para el tercer módulo.
                  La App es un gestor de turnos para una clínica dental, que
                  permite registrarse, iniciarse sesión, solicitar turnos y
                  cancelarlos.
                </p>
                <div className="w-full md:w-full m-2 flex justify-end   ">
                  <div className="w-3/4  flex justify-around">
                    <Link href="https://github.com/leandromortarini2/ShiftManager.git">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card SHIFT MANAGER CELULAR*/}
          {/* card SHIFT MANAGER CELULAR*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              {" "}
              <Image
                className="w-full h-52 imgEffectLow"
                src={ShiftManager}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                {" "}
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  Shift Manager
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  <span className="text-teal-500">
                    {" "}
                    Next Js | Tailwind | Typescript | Context <br />
                  </span>{" "}
                  Proyecto realizado en el Bootcamp Henry para el tercer módulo.
                  La App es un gestor de turnos para una clínica dental, que
                  permite registrarse, iniciarse sesión, solicitar turnos y
                  cancelarlos.
                  <div className="w-full flex flex-col items-center ">
                    <Link href="https://github.com/leandromortarini2/ShiftManager.git">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
          {/* card SHIFT Movies */}
          {/* card SHIFT Movies */}
          <div className="hidden w-full  lg:w-full md:h-[250px]   md:m-3 md:flex  overflow-hidden lg:min-h-[300px] justify-center bg-gray-900  shadow-lg shadow-teal-950">
            <div className="w-1/2 min-h-52  lg:min-h-[300px]  lg:ronunded-2xl">
              <Image
                className="w-full h-full imgEffectRigth"
                src={AppMovies}
                alt=""
              />
            </div>
            <div className="w-3/4  h-52  lg:min-h-[300px] flex flex-col justify-evenly  ml-5 ">
              <div>
                {" "}
                <h2 className=" text-gray-300 font-bold text-lg  lg:text-3xl xl:text-4xl capitalize p-2">
                  MEGA PELIS
                </h2>
                <p className=" text-gray-300 font-semibold text-md   lg:text-xl xl:text-2xl  capitalize p-2">
                  <span className="text-teal-500">
                    HTML | Css | Javascript | Bootstraps <br />
                  </span>
                  Esta app la realicé para el segundo módulo del bootcamp Henry,
                  es una app simple que contiene solicitudes a la data base,
                  mapeos de cards y un formulario para poder crear nuevas
                  películas.
                </p>
                <div className="w-full md:w-full m-2 flex justify-end   ">
                  <div className="w-3/4  flex justify-around">
                    <Link href="https://github.com/leandromortarini2/MovieApp.git">
                      <span className="p-1 md:text-lg xl:text-2xl font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card SHIFT Movies CELULAR*/}
          {/* card SHIFT Movies CELULAR*/}
          <div className="w-full min-h-[300px]  flex flex-col justify-center md:hidden bg-gray-800">
            <div className="w-full  ">
              <Image
                className="w-full h-52 imgEffectLow"
                src={AppMovies}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col justify-evenly items-center mb-2 ">
              <div>
                <h2 className=" text-gray-200 font-bold  text-2xl  text-center capitalize">
                  MEGA PELIS
                </h2>
                <p className=" text-gray-300 font-semibold  text-lg text-center p-2 capitalize">
                  <span className="text-teal-500">
                    HTML | Css | Javascript | Bootstraps <br />
                  </span>
                  Esta app la realicé para el segundo módulo del bootcamp Henry,
                  es una app simple que contiene solicitudes a la data base,
                  mapeos de cards y un formulario para poder crear nuevas
                  películas.
                  <div className="w-full flex flex-col items-center ">
                    <Link href="https://github.com/leandromortarini2/MovieApp.git">
                      <span className="p-1 font-bold capitalize text-gray-500 rounded-lg  tracking-wide hover:text-teal-500">
                        visit GitHub
                      </span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
