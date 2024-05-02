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
        <div className="w-3/4 md:h-[150px] flex items-end  ">
          <h2 className="text-xl sm:text-3xl md:text-6xl  text-start Title  text-teal-500">
            About
          </h2>
          <Image src={codeImg} alt="" className="w-14" />
        </div>

        {/* container */}
        <div className="w-full flex justify-center items-center ">
          <div className="w-1/2">
            <p className="text-sm sm:text-md md:text-lg text-justificado font-semibold p-5 md:p-20 ">
              Hola! soy Leandro Mortarini y me forme como <br />
              <span className="text-teal-500 text-2xl">
                Full Stack Developer con especialización en Front End.
              </span>{" "}
              <br />
              Mi experiencia se centra en tecnologías como{" "}
              <span className="text-teal-500">
                React, Next, Javascript, Node.js, Express y TypeScript.
              </span>
              <br /> Soy un firme creyente en el poder del trabajo en equipo y
              tengo habilidades sólidas para colaborar eficazmente con colegas
              de diversos ámbitos. <br />
              Tambien cuento con una gran determinación, me esfuerzo por superar
              desafíos y alcanzar objetivos con eficiencia. Estoy emocionado de
              seguir creciendo y aprendiendo en este dinámico campo tecnológico
              mientras contribuyo al desarrollo de soluciones innovadoras.
            </p>
          </div>{" "}
          <div className="w-1/4">
            <Image
              src={Perfil}
              alt=""
              className="ImgPerfil w-40 sm:w-3/4 sm:ml-9 md:m-0 opacity-80"
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:w-1/2  sm:flex justify-center sm:items-end items-center "></div>
    </>
  );
};

export default About;
{
  /* EDUCACION
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
               <div className="sm:mr-10 sm:ml-5">
              {" "}
              <h3 className="text-center sm:text-lg font-semibold ">
                Henry Bootcamp 2024.
              </h3>
              <h2 className="text-center">
                Full Stack Web Developer 800 horas de cursado teórico-práctico.
              </h2>
            </div>
            </div> */
}

//   <table className="w-1/2 text-center bg-[#636bd953]">
//     <tbody>
//       <tr className="hover:bg-slate-600">
//         <td>React</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Next</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Javascript</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Typescript</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Node Js</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>MongoDB</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Express</td>
//       </tr>
//     </tbody>
//   </table>

//   {/* Tabla 2 */}
//   <table className="w-1/2 text-center bg-[#636bd953]">
//     <tbody>
//       <tr className="hover:bg-slate-600">
//         <td>Tailwind</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Redux</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>PHP</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>MySQL</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>PostgreSQL</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>HTML</td>
//       </tr>
//       <tr className="hover:bg-slate-600">
//         <td>Css</td>
//       </tr>
//     </tbody>
//   </table>
//
