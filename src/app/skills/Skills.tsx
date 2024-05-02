import { NavBar } from "@/components/NavBar/NavBar";
import React from "react";
import Image from "next/image";
import codeImg from "@/assets/code.svg";

export const Skills = () => {
  return (
    <>
      <div className="containerHome w-full min-h-screen flex flex-col items-center ">
        <NavBar />
        <div className="w-3/4 mt-5 mb-5 xl:h-[150px] flex items-center sm:items-end justify-center sm:justify-normal  ">
          <h2 className="text-xl text-center sm:text-2xl lg:text-4xl  lg:text-start xl:text-5xl   Title  text-teal-500 opacity-50">
            Skills
          </h2>
          <Image
            src={codeImg}
            alt=""
            className="w-6 lg:w-10 xl:w-12 opacity-50"
          />
        </div>

        {/* CONNAINER SKILLS */}

        <div className="w-full flex justify-center items-center">
          <div className="w-3/4 flex flex-col sm:flex-row flex-wrap justify-evenly">
            {/*  */}
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900  ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Next Js
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                React
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Javascript
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Typescript
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Redux
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                PostgreSQL
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Mysql
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Tailwind
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Express Js
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                MongoDB
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Node Js
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                Css 3
              </h2>
            </div>
            <div className="w-full sm:w-1/3 xl:w-1/4 h-12 xl:h-14 bg-slate-900 mb-5 sm:m-2 xl:m-5 rounded-xl  flex items-center shadow-lg  duration-500 hover:scale-110  hover:shadow-teal-900 ">
              <Image
                src={codeImg}
                alt=""
                className="w-6 lg:w-10 xl:w-8 opacity-50 ml-5"
              />
              <h2 className="text-white sm:text-xl ml-2 tracking-[2px]  ">
                HTML 5
              </h2>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
