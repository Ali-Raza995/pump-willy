import { buyButtons } from "@/staticData/data";
import React, { useState } from "react";
import BuyItOn from "./buy-it-on/buy-it-on";

const BuySection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "0x532f27101965dd16442E59d40670FaF5eBB142E4";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log(`Copied: ${textToCopy}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  console.log("isCopied", isCopied);
  return (
    <>
      {isCopied && (
        <div className="fixed top-1 right-1 text-white py-6 rounded-bl-md z-50 text-xl text-center text-white-500 duration-300 transition-all ease-in-out  bg-lyllw/70 m-5 px-20 rounded-xl ">
          Address Copied
        </div>
      )}
      <div className="flex flex-col items-center gap-12 font-['Londrina_Solid'] my-[2rem]">
        <div
          className="px-4 py-3 border-solid border-[1px] border-lyllw/100 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold z-50 hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 text-sm lg:text-xl text-white sMob:w-[80%] sMob:text-[14px]"
          onClick={copyToClipboard}
        >
          <img
            src="/assets/svgs/copy-icon.svg"
            alt="copy-icon"
            className="w-[20px] h-[20px]"
          />
          <p className="drop-shadow-lg overflow-hidden">{textToCopy}</p>
        </div>
        <div className=" flex flex-col items-center md:flex-row gap-x-4 gap-y-5 ">
          {buyButtons?.map((btnData, index) => (
            <a href={btnData?.btnUrl}>
              <button className="bg-white btn-text font-bold text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex items-center gap-x-3 items- hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300">
                {btnData?.btnName}
                {index !== 2 && (
                  <img
                    src="/assets/svgs/camera-icon.svg"
                    alt="camera-icon"
                    className="w-[20px] h-[20px]"
                  />
                )}
              </button>
            </a>
          ))}
        </div>
        <BuyItOn />
      </div>
    </>
  );
};

export default BuySection;
