import { buyPlans } from "@/staticData/data";
import React from "react";

const BuyItOn = () => {
  return (
    <div className="py-[6rem] mt-[4rem] w-full h-auto p-10 relative z-20">
      <div className="max-w-7xl mx-auto p-5 xl:p-20 rounded-xl bg-[#0244a5b3] backdrop-blur">
        <div className="flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem] mb-20 text-white">
          <p>PRESALE IS LIVE</p>
        </div>

        <div className="max-w-[350px] w-full mx-auto bg-[#DBE5EE] rounded-[10px]">
          {buyPlans?.map((plan, index) => (
            <a href={plan?.planUrl} key={index} target="_blank">
              <img
                src={plan?.imagePath}
                className="w-full mx-auto duration-300 transition-all ease-in-out hover:scale-110 mt-8 "
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
