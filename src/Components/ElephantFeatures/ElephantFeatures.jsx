import React from "react";
import icon_03 from "./../../assets/Icon_03.png";
import icon_02 from "./../../assets/Icon_02.png";

function ElephantFeatures() {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-[3rem] font-bold text-[#323842] pt-[5rem]">
        Elephant Features
      </h1>
      <div className="flex justify-center items-center gap-10 px-10 pt-10">
        <div className="flex-5 flex flex-col h-[15rem] justify-center bg-[#baf3eb] p-5 rounded-[20px] hover:shadow-lg translate-x-1 duration-200">
          <h1 className="text-start text-[1.5rem] font-semibold text-[#323842]">
            Feature
          </h1>
          <p>
            Trunk: Elephants have a long, flexible trunk made of over 40,000
            muscles. It serves as a multi-functional tool for breathing,
            smelling, drinking, grabbing objects, and communicating.
          </p>
          <img
            src={icon_03}
            alt="baby-elephant"
            className="w-[20%] flex flex-end"
          />
        </div>

        <div className="flex-7 bg-[#ced0f8] p-5 rounded-[20px]  h-[15rem] hover:shadow-lg translate-x-1 duration-200">
          <h1 className="text-start text-[1.5rem] font-semibold text-[#323842]">
            Feature
          </h1>
          <div className="flex justify-between">
            <p>
              Tusks: These elongated incisors are made of ivory and are used for
              digging, lifting objects, defense, and stripping bark from trees.
              Both male and female African elephants typically have tusks, while
              only some male Asian elephants do.
            </p>
            <img src={icon_02} alt="baby-elephant" className="w-[30%]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 px-10 pt-10 ">
        <div className="flex-7 flex flex-col h-[15rem] justify-center bg-[#ffc9b4] p-5 rounded-[20px] hover:shadow-lg translate-x-1 duration-200">
          <h1 className="text-start text-[1.5rem] font-semibold text-[#323842]">
            Feature
          </h1>
          <p>
            Thick Skin: Their skin is tough and thick, up to 2.5 cm (1 inch) in
            some areas. Despite its thickness, it is sensitive to the sun,
            insects, and dehydration, which is why elephants frequently bathe in
            mud or water to protect it.
          </p>
        </div>
        <div className="flex-5 bg-[#fdf1f5] p-5 rounded-[20px]  h-[15rem] hover:shadow-lg translate-x-1 duration-200">
          <h1 className="text-start text-[1.5rem] font-semibold text-[#323842]">
            Feature
          </h1>
          <p>
            Ears: Elephants have large, fan-like ears that help regulate their
            body temperature. By flapping their ears, they cool down as blood
            circulates through the thin skin of the ears
          </p>
          <img src={icon_02} alt="baby-elephant" className="w-[30%]" />
        </div>
      </div>
    </div>
  );
}

export default ElephantFeatures;
