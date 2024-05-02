"use client";
import React from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import GitHub from "@/assets/png-transparent-github-git-hub-logo-icon-thumbnail.png";
import Linkedin from "@/assets/linkedin.jpg";
import Whatsapp from "@/assets/whatsapp.png";
import Facebook from "@/assets/facebook.png";
import Instagram from "@/assets/instagram.png";
import Link from "next/link";

export const Home = () => {
  return (
    <>
      <div className="containerHome w-full min-h-screen ">
        <NavBar />
        {/* container general */}
        {/* container general */}
        {/* container general */}
        <div className="w-full min-h-screen  flex flex-col items-center justify-center  ">
          <div className="w-full flex flex-col justify-center items-center   ">
            {/* CONTAINER 1 */}
            {/* CONTAINER 1 */}
            {/*  */}
            <div className="sm:w-3/4 flex flex-col justify-center items-center sm:items-centerk  ">
              <h2 className="p-2 sm:text-lg xl:text-2xl font-normal  text-center tracking-[3px]  ">
                BIENVENIDOS
              </h2>
              <h2 className="p-2 sm:text-lg xl:text-2xl font-normal  text-justify tracking-[3px] ">
                SOY
              </h2>
              <h1 className="p-2 sm:text-2xl xl:text-5xl text-start text-teal-500 tracking-[3px] TitleHome">
                Leandro Mortarini
              </h1>
              <h2 className="p-2 sm:text-2xl xl:text-4xl tracking-[3px] ">
                Full Stack Developer
              </h2>
              <h3 className="p-2 sm:text-lg xl:text-2xl text-teal-800 TitleHome ">
                leandromortarini2@gmail.com
              </h3>
            </div>

            <div className="sm:w-1/2 h-20 flex justify-evenly items-center xl:mt-20 ">
              <Link href="https://github.com/leandromortarini2">
                <button className="">
                  {" "}
                  <Image
                    src={GitHub}
                    alt=""
                    className="w-7 sm:w-8 xl:w-12 opacity-50 hover:opacity-100 "
                  />
                </button>{" "}
              </Link>

              <Link href="https://www.linkedin.com/in/leandro-mortarini/">
                {" "}
                <button>
                  {" "}
                  <Image
                    src={Linkedin}
                    alt=""
                    className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                  />
                </button>
              </Link>
              <Link href=" https://wa.me/541126034427">
                <button>
                  {" "}
                  <Image
                    src={Whatsapp}
                    alt=""
                    className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                  />
                </button>
              </Link>
              <Link href="https://web.facebook.com/leandro.mortarini.5/">
                <button>
                  {" "}
                  <Image
                    src={Facebook}
                    alt=""
                    className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                  />
                </button>
              </Link>
              <Link href="https://www.instagram.com/mortajunior/">
                <button>
                  {" "}
                  <Image
                    src={Instagram}
                    alt=""
                    className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                  />
                </button>
              </Link>
            </div>

            {/* CONTAINER 2 */}
            {/* CONTAINER 2 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
