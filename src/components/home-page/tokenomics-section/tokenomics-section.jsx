import React from "react";

const TokenomicsSection = () => {
  return (
    <div
      className="w-full h-auto pt-[12rem] pb-[5rem] z-10 relative"
      id="tokenomics"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="800" 
    >
      <div className="max-w-screen-xl mx-auto p-4 ">
        <div className="bg-gradient-to-t from-yllw/50 to-lyllw/50  backdrop-blur-lg  gap-y-8 items-center justify-center w-full p-12 rounded-2xl border-solid border-[1px] border-lyllw/70">
          <div className="flex flex-col md:flex-row">
            <div
              className="flex flex-col items-center justify-center "
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <img
                src="/assets/images/tokenomics-contract.png"
                alt="tokenomics-section"
              />
            </div>
            <div
              className="items-center gap-y-4 w-full lg:w-1/2 text-center "
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <h1 className="text-stroke-sm text-6xl md:text-8xl sMob:text-4xl text-center">
                TOKENOMICS
              </h1>
              <div className="text-center text-white">
                <p className="mt-5 text-5xl md:text-7xl sMob:text-[2rem]">85% LP</p>
                <p className="mt-5 text-5xl md:text-7xl sMob:text-[2rem]">10% TREASURY</p>
                <p className="mt-5 text-5xl md:text-7xl sMob:text-[2rem]">5% CEX WALLET</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-5 gap-x-5 text-center text-5xl mt-5 text-white">
            <div className="w-full bg-lyllw/70 rounded-3xl drop-shadow-lg duration-300 transition-all ease-in-out hover:scale-110 hover:bg-lyllw/100">
              <a
                href="https://basescan.org/tx/0x748e6b909db8798aab851294c416e058f5b9fccc2367a7ec608bfda50c39432b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="sMob:text-[2rem] sMob:px-2">CONTRACT RENOUNCED</h1>
              </a>
            </div>
            <div className="w-full bg-lyllw/70 rounded-3xl drop-shadow-lg duration-300 transition-all ease-in-out hover:scale-110 hover:bg-lyllw/100">
              <a
                href="https://basescan.org/tx/0x7b59c9fc5476bfc5d5cdd467926a928ad6b18cb0092b9fa096332d9f441337c3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="sMob:text-[2rem] sMob:px-2">LP LOCKED 365 DAYS</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
