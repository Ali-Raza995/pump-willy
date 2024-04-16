import { socialMediaLinks } from "@/staticData/data";
import React from "react";

const AboutBrett = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto p-4 font-['Londrina_Solid'] mt-[6rem]"
      id="about"
    >
      <div
        className="flex justify-between items-center gap-x-4 flex-col lg:flex-row py-4 _pop-in"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <p className="text-primary text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem] bg-gradient-to-r text-white w-max text-transparent pointer-events-none">
        WILLY
        </p>
        <div className="w-full h-[2px] bg-gradient-to-r from-lyllw to-yllw hidden lg:block"></div>
        <p className="tracking-[0.5rem] font-bold w-max whitespace-nowrap text-white">
          THE PEPE'S BESTFRIEND
        </p>
      </div>
      <div
        className="bg-gradient-to-t from-yllw/50 to-lyllw/50  backdrop-blur-lg  flex flex-col lg:flex-row gap-y-8 items-center justify-center w-full p-12 rounded-2xl border-solid border-[1px] border-lyllw/70 animate-fadeIn"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="width: 100%; height: 100%;">
            <img src="/assets/images/HODL__$WILLY.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 text-center lg:text-left">
          <div data-aos="fade-right"   data-aos-delay="1000">
            <h1 className="text-stroke-sm text-5xl">Who's WILLY?!</h1>
            <p className="text-2xl text-white mt-4">
              WILLY is the legendary character from Matt Furie’s Boys' club
              comic. He is a dancer and loves video games. Now he is living on
              the BASE blockchain as a Fan tribute. He has become blue mascot of
              the blue chain, BASE.
            </p>
          </div>
          <video className="rounded-xl drop-shadow-lg" controls>
            <source src="/assets/videos/Brett.mp4" type="video/mp4" />
          </video>
          <p className="text-2xl text-white">Video Courtesy: Feels Good Man</p>
        </div>
      </div>
      <div className="flex gap-x-4 items-center justify-center mt-5 mx-auto">
        {socialMediaLinks?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-lyllw uppercase text-xl px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/10 to-lyllw/10 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300">
              <p className="uppercase">{link.platform}</p>
              <img
                src={link.iconSrc}
                alt={`${link.platform} Icon`}
                className="w-[20px] h-[20px]"
              />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutBrett;
