import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto relative">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-y-4">
        <div className="flex items-center justify-center py-12">
          <p className="text-primary sMob:text-[7rem] text-9xl text-center text-white w-max text-transparent pointer-events-none text-stroke">
            PUMP 
          </p>
        </div>
        <div className="flex justify-center w-full py-4 text-white">
          <p className="">Copyright © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
