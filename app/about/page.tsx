"use client";
import React from "react";
import Image from "next/image";
import { skills } from "@/data";
import Approach from "@/components/Approach";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/Sparkles";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import PhotoGallary from "@/components/ui/PhotoGallary";

const page = () => {
  return (
    <div className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 my-40 gap-10 ">
        <div className=" w-full">
          <h1 className="text-3xl  font-righteous font-extrabold leading-9 tracking-wide text-n-1 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About.
          </h1>
          <p className="text-3xl my-8 leading-[2.5rem] font-mono font-semibold text-n-1">
            I&apos;m a software engineer from London with a passion for building
            digital products.
          </p>
          <p className="text-lg font-mono  text-n-2">
            When I&apos;m not immersed in lines of code, I&apos;m out exploring
            city, trekking through forests, diving into the depths of the
            digital world, or surfing the waves of innovation.
          </p>
        </div>
        <div className=" flex items-center justify-center ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-white dark:bg-zinc-900">
            <Image
              src="/myImages/image1.jpg"
              alt="jordans"
              height={600}
              width={400}
              className="object-contain rounded-[22px]"
            />
          </BackgroundGradient>
        </div>
      </div>
      <Approach />
      <section className="flex flex-col">
        <div className="flex flex-row items-center justify-center">
          <h1 className="heading">
            My <span className="text-purple mx-2"> Skills</span>
          </h1>
        </div>
        <div className="my-20 max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
          {skills.map((skill) => (
            <Button
              key={skill.name}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800  px-4 gap-5 rounded-2xl flex flex-row items-center justify-center"
            >
              <Image
                src={skill.imgSrc}
                alt={skill.name}
                className="w-10 sm:w-16 rounded-full"
              />
              <span className="text-sm font-bold md:text-lg md:font-semibold">
                {skill.name}
              </span>
            </Button>
          ))}
        </div>
      </section>
      <Experience />
      <Clients />
      <PhotoGallary />
    </div>
  );
};

export default page;
