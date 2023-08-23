import type { ReactElement } from "react";
import Image from "next/image";
import clsx from "clsx";

export const AboutSection = (): ReactElement => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-lg text-white-100 font-medium">Frontend Developer</p>
        </div>
        <div className="flex items-center gap-2 bg-green bg-opacity-20 px-2 py-2 sm:py-0.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-green rounded-full" />
          <p className="hidden sm:block uppercase text-sm text-green text-opacity-80 tracking-wide">Available</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-[3fr_1fr] items-center gap-8 mt-16">
        <div className="order-2 sm:order-1">
          <h1 className="font-semibold text-white text-3xl text-center sm:text-start">Romain San Vicente</h1>
          <p className="mt-2 text-white-200 text-center sm:text-start">Frontend Developer since 2020. I work with the framework NextJS.</p>
          <button className={clsx(
            "flex mx-auto border border-gray-300 rounded-lg text-white text-sm font-medium px-3 py-2 mt-8 w-fit",
            "sm:mx-0"
          )}>Copy Email</button>
        </div>
        <div className={clsx(
          "order-1 relative justify-self-center bg-white min-w-36 w-36 min-h-36 h-36 rounded-full border border-white",
          "sm:order-2 sm:justify-self-end"
        )}>
          <div className="border-8 border-gray-200 w-full h-full rounded-full">
            <Image src="/memoji.png" alt="Memoji" fill className="object-contain p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};