const IntroSection = () => {
  return (
    <div className="introduction-section w-ful  h-auto relative z-40 bg-lyllw/40">
      <div className="font-['Londrina_Solid'] max-w-screen-xl mx-auto p-4 flex flex-col gap-y-12 items-center justify-center relative z-20 ">
        <div className="flex items-center justify-center flex-col md:flex-row gap-y-8 lg:mt-6">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-[48rem] h-[48rem] z-[-1] rounded-full blur-[128px] bg-lyllw/50 absolute -top-80 -right-80"></div>
            <div className="h-[48rem] w-[48rem] rounded-full blur-[128px] bg-yllw/30 absolute -bottom-0 -left-48"></div>
            <img
              src="/assets/images/BUY_$WILLY.png"
              alt="introduction-section"
              className="lg:w-[80%]"
            />
          </div>
          <div
            className="flex flex-col text-white w-full lg:w-1/2 items-center lg:items-start section-2"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <p
              className="font-primary font-semibold tracking-[0.5rem] section-2"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              INTRODUCING
            </p>
            <p
              className="font-primary text-7xl lg:text-9xl bg-gradient-to-r text-white text-stroke text-transparent pointer-events-none"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              WILLY
            </p>
            <p
              className="font-primary text-3xl tracking-[0.5rem] text-center lg:text-left"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              The Solana whale that pumps!
            </p>
          </div>
        </div>
        <div className="max-w-[80rem] w-full mx-auto ">
          <p className="text-2xl text-white tracking-[0.5rem]">
            $WILLY accumulates the money of degens, the tears of jeets and pumps
            all charts with green candles. <br /> Help #PumpWilly up into the
            biggest whale in crypto by following these 3 simple steps
          </p>
          <div className="flex flex-col">
            <ul>
              <li>
                <p className="text-2xl text-white tracking-[0.5rem] mt-6">
                  1. BUY $WILLY
                </p>
              </li>
              <li>
                <p className="text-2xl text-white tracking-[0.5rem]">
                  2. HODL $WILLY
                </p>
              </li>

              <li>
                <p className="text-2xl text-white tracking-[0.5rem]">
                  3. PUMP $WILLY
                </p>
              </li>
            </ul>
          </div>

          <div className="h-[2px] bg-white/50 w-full mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
