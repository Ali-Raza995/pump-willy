import React from "react";

const BuyTutorialSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="w-full h-auto relative  !text-white">
        <div className="w-full h-screen absolute z-10 opacity-100"></div>
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-8 items-center justify-center relative z-20">
          <div className="flex flex-col items-center font-bold gap-y-4 translate-y-28 z-50">
            <div className="flex flex-col items-center" data-aos="fade-down">
              <p className="tracking-[0.5rem]">$WILLY</p>
              <p className="tracking-[0.5rem]">JUST PUMP IT</p>
            </div>
            <a
              href="#"
              className="hover:scale-110 transition-all ease-in-out duration-300"
            >
              <div
                className="bg-gradient-to-b from-gry to-blk p-6 rounded-full border-solid border-[1px] border-lyllw/70"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div
                  className="bg-gradient-to-tr from-lyllw to-yllw rounded-full p-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <div
                    className="rounded-full w-40 h-40"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="5000"
                  >
                    <div
                      className="w-full h-full"

                    >
                      <img
                        src="/assets/images/PUMP__$WILLY.png"
                        alt="buy-section"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-white/20 to-black/20 flex flex-col gap-y-8 items-center justify-center pt-24 pb-12 rounded-2xl border-solid border-[1px] border-lyllw/70 relative overflow-hidden backdrop-blur-lg  ">
        <div
          className="flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem] mt-4"
          data-aos="fade-right"
        >
          <p className="text-primary bg-gradient-to-r text-white w-max text-transparent pointer-events-none text-stroke">
          WILLY
          </p>
        </div>
        <div className="flex p-10 gap-x-3 flex-col md:flex-row gap-y-7">
          <div className="w-full">
            <video
              className="rounded-xl drop-shadow-lg w-full h-[80%]"
              controls
            >
              <source
                src="/assets/videos/how-to-buy-on-mainnet.mp4"
                type="video/mp4"
              />
            </video>
            <p className="text-center text-xl text-white">
              How to buy on Solana Mainnet
            </p>
          </div>

          <div className="w-full">
            <video
              className="rounded-xl drop-shadow-lg  w-full h-[80%]"
              controls
            >
              <source
                src="/assets/videos/how-to-buy-on-coinbase.mp4"
                type="video/mp4"
              />
            </video>
            <p className="text-center text-xl text-white">
              How to buy on CoinBase
            </p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <a
            href="https://kyberswap.com/swap/base/eth-to-brett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/100 to-lyllw/100 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/100 transition-all ease-in-out duration-300">
              <p className="text-white">Buy Now</p>
              <img src="/assets/svgs/shop-basket.svg" alt="" />
            </button>
          </a>
          <a
            href="https://www.dextools.io/app/en/base/pair-explorer/0x404e927b203375779a6abd52a2049ce0adf6609b?t=1708765825026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/30 to-lyllw/30 font-semibold hover:scale-[1.05] hover:from-yllw/40 hover:to-lyllw/40 transition-all ease-in-out duration-300">
              <p className="text-white">See Charts </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyTutorialSection;
