import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import codeImg from "@/assets/code.svg";
import projectImg from "@/assets/Project1.png";
import gitHubImg from "@/assets/gitHubWhite.png";
import vercelImg from "@/assets/vercel.png";

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
          <div className="w-3/4 flex flex-col md:flex-row md:w-3/4 lg:w-3/4 xl:w-1/2 md:h-[200px] bg-slate-900 rounded-xl overflow-hidden  m-5 shadow-lg shadow-teal-950">
            <Image
              src={projectImg}
              alt=""
              className="w-full md:w-1/3 h-full opacity-80 "
            />
            <div className="flex flex-col justify-center items-center">
              {" "}
              <h2 className="  mt-2  lg:text-lg xl:font-semibold">
                E-commerce
              </h2>
              <p className="md:text-sm lg:text-md p-2 xl:pl-5 xl:pr-5 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                commodi blanditiis dolorum facere! Magnam ducimus eveniet
                quisquam quibusdam provident velit? Quasi vitae obcaecati
                dignissimos consequatur illo culpa numquam ducimus accusantium.
              </p>
              <div className="w-full md:w-1/4 m-2 flex justify-center items-center">
                <button>
                  <Image
                    src={gitHubImg}
                    alt=""
                    className=" w-8 mr-4 shadow-lg ImgCards "
                  />
                </button>
                <button>
                  <Image src={vercelImg} alt="" className="w-7 ImgCards mb-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
