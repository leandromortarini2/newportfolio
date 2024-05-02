"use client";
import React from "react";
import { useState } from "react";
import BurgerIMG from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";

export const NavBar: React.FC = () => {
  const [burgerState, setBuger] = useState(false);

  const handleBurger = (event: React.MouseEvent) => {
    event.preventDefault();

    setBuger(!burgerState);
  };

  return (
    <>
      <div className="w-full h-14 sm:h-16  flex justify-evenly items-center  bg-gray-900 sm:bg-transparent ">
        <div className="w-1/2 sm:w-1/4 flex justify-center">
          <h2 className=" text-lg font-semibold  sm:text-teal-600 xl:text-xl sm:font-bold tracking-[2px] textEffect ">
            Developer
          </h2>
        </div>

        <div className="hidden sm:w-1/2  sm:flex justify-evenly">
          <Link href="/">
            <button className="hover:text-teal-300 text-teal-700  sm:lg xl:text-xl font-bold">
              Home
            </button>
          </Link>

          <Link href="/about">
            <button className="hover:text-teal-300 text-teal-700 sm:lg xl:text-xl font-bold">
              About
            </button>
          </Link>

          <Link href="/skills">
            {" "}
            <button className="hover:text-teal-300 text-teal-700  sm:lg xl:text-xl font-bold">
              Skills
            </button>
          </Link>

          <Link href="/projects">
            {" "}
            <button className="hover:text-teal-300 text-teal-700 sm:lg xl:text-xl font-bold">
              Projects
            </button>
          </Link>
        </div>

        <div className="hidden sm:w-1/4 sm:flex justify-center  sm:lg xl:text-xl font-bold ">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
            download="CV_Leandro_Mortarini.pdf"
          >
            <button className="p-1 border border-teal-700 rounded-lg text-teal-700 hover:text-teal-300 hover:border-teal-300 block text-[12px] xl:text-lg xl:p-2 ">
              Visit CV
            </button>
          </a>
        </div>

        {/* BURGER */}
        {/* BURGER */}

        <div className="w-1/2 sm:hidden flex justify-end mr-3">
          <button onClick={handleBurger}>
            <Image src={BurgerIMG} alt="" className="w-10 sm:hidden" />
          </button>
        </div>

        {/* CONTAINER BURGER */}
        {/* CONTAINER BURGER */}
      </div>
      {burgerState ? (
        <div className=" w-full h-[350px] bg-gray-800 sm:hidden absolute top-14 z-30">
          <div className="w-full h-1/2 flex  flex-col justify-evenly items-center pt-4 ">
            <Link href="/">
              <button className="hover:text-teal-300 text-teal-700  text-lg ">
                Home
              </button>
            </Link>

            <Link href="/about">
              <button className="hover:text-teal-300 text-teal-700  text-lg">
                About
              </button>
            </Link>

            <Link href="/skills">
              <button className="hover:text-teal-300 text-teal-700  text-lg">
                Skills
              </button>
            </Link>

            <Link href="/projects">
              <button className="hover:text-teal-300 text-teal-700  text-lg ">
                Projects
              </button>
            </Link>
          </div>

          <div className="w-full h-1/2  flex justify-center items-center text-md ">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
              download="CV_Leandro_Mortarini.pdf"
            >
              <button className="p-1 h-[35px]  border border-teal-700 rounded-lg hover:text-teal-300 hover:border-teal-300 block text-teal-700   ">
                Visit CV
              </button>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
