import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import sombrero from "@/assets/gorro.png";

import "@/app/Home/home.css";

const About = () => {
  return (
    <>
      <div className="containerHome w-full min-h-screen flex flex-col items-center ">
        <NavBar />
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mt-10 text-start text-white ">
          ABOUT
        </h2>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-3/4 ">
            <p className="text-sm sm:text-md md:text-lg text-center font-semibold p-5  md:p-8">
              Hola soy Leandro Mortarini tengo 30 años y soy de Buenos Aires
              Argentina. <br />
              Me forme como Full Stack Developer especializado en front end con
              experiencia en tecnologías como Next, React, Node.js, Express y
              TypeScript. Mi enfoque se centra en crear aplicaciones web
              modernas y altamente funcionales, ofreciendo soluciones integrales
              y optimizadas. Con un firme compromiso, habilidades de trabajo en
              equipo y una determinación inquebrantable, garantizo resultados
              que superan las expectativas del cliente.
            </p>
          </div>

          {/* EDUCACION */}
          <div className="w-1/2   flex flex-col items-center justify-evenly">
            <div className="w-full flex flex-col sm:flex-row  items-center">
              <Image src={sombrero} alt="" className="w-[40px] h-[40px] " />
              <div className="sm:mr-10 sm:ml-5">
                {" "}
                <h3 className="text-center sm:text-lg font-semibold ">
                  Universidad Tecnológica Nacional Facultad Regional Resistencia
                  Chaco - UTN FRRe 2023.
                </h3>
                <h2 className="text-center">
                  Diplomatura en Programación web con PHP y MySQL.
                </h2>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row  items-center mt-7">
              <Image src={sombrero} alt="" className="w-[40px] h-[40px] " />
              <div className="sm:mr-10 sm:ml-5">
                {" "}
                <h3 className="text-center sm:text-lg font-semibold ">
                  Henry Bootcamp 2024.
                </h3>
                <h2 className="text-center">
                  Full Stack Web Developer 800 horas de cursado
                  teórico-práctico.
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-10 mb-10">
            <h2 className="text-xl font-bold">TECHNOLOGIES</h2>
            <div className="w-1/2  flex justify-evenly">
              <table className="w-1/2 text-center bg-[#636bd953]">
                <tbody>
                  <tr className="hover:bg-slate-600">
                    <td>React</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Next</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Javascript</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Typescript</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Node Js</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>MongoDB</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Express</td>
                  </tr>
                </tbody>
              </table>

              {/* Tabla 2 */}
              <table className="w-1/2 text-center bg-[#636bd953]">
                <tbody>
                  <tr className="hover:bg-slate-600">
                    <td>Tailwind</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Redux</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>PHP</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>MySQL</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>PostgreSQL</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>HTML</td>
                  </tr>
                  <tr className="hover:bg-slate-600">
                    <td>Css</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
