import { utilitiesData } from "@/staticData/data";
import React from "react";

const UtilitiesSections = () => {
  return (
    <div
      className="max-w-screen-md mx-auto p-4 flex flex-col items-center  z-20 my-[6rem]"
      data-aos="zoom-in"
      data-aos-delay="800"
    >
      <p className="font-age text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] bg-gradient-to-r text-white bg-clip-text w-max  pointer-events-none p-4 uppercase">
        Utilities
      </p>

      <div className="w-full flex flex-col gap-y-4">
        {utilitiesData?.map((utilityItem, index) => (
          <div className="bg-gradient-to-t from-yllw/50 to-lyllw/50 flex flex-col lg:flex-row gap-y-8 items-center w-full p-12 rounded-2xl border-solid border-[1px] border-lyllw/70 backdrop-blur-lg">
            <div
              className="flex flex-col justify-center gap-y-4 w-full text-center lg:text-left text-white"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <p className="text-3xl lg:text-4xl text-white">
                {utilityItem?.header}:
              </p>
              <p>{utilityItem?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UtilitiesSections;
