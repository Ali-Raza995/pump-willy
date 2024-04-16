import { buyPlans } from "@/staticData/data";
import React from "react";

const BuyItOn = () => {
  return (
    <div className="py-[6rem] mt-[4rem] w-full h-auto p-10 relative z-20">
      <div className="max-w-7xl mx-auto p-5 xl:p-20 rounded-xl bg-[#0244a5b3] backdrop-blur">
        <div className="flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem] mb-10 text-white">
          <p>BUY IT ON</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 max-w-9xl mx-auto">
          {buyPlans?.map((plan, index) => (
            <a href={plan?.planUrl} key={index} target="_blank">
              <img
                src={plan?.imagePath}
                className="w-full mx-auto duration-300 transition-all ease-in-out hover:scale-110"
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyItOn;
