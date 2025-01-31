import React from "react";
import Button from "@mui/material/Button";
import icon_07 from "./../../assets/Icon_07.png";
import Elephant from "./../../assets/Elephant.png";

function AboutElephant() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-4 md:p-8 bg-gray-100">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-center text-[2rem] md:text-[3rem] font-bold text-[#323842]">
          About Elephant's
        </h1>
        <img
          src={icon_07}
          alt="icon_o7"
          className="mx-auto h-[1.5rem] md:h-[2rem] mt-2"
        />

        <p className="text-left text-[#323842] mx-4 md:mx-0 md:w-[580px] font-inter text-[1rem] md:ml-[2.5rem]">
          An elephant is a large, herbivorous mammal known for its distinctive
          trunk, long tusks, and massive body. Found in Africa and Asia,
          elephants are highly intelligent, social animals that live in family
          groups. They use their trunks for eating, drinking, and communication.
          Elephants play a vital role in ecosystems, dispersing seeds and
          creating pathways in dense vegetation. Sadly, they face threats from
          habitat loss and poaching, making conservation efforts crucial.
        </p>
        <button className="mt-5 ml-4 md:ml-[2.5rem] p-2 px-8 text-sm md:text-[18px] flex items-center justify-center font-inter font-normal text-[#636AE8] bg-white border-[1px] border-[#636AE8] rounded-[26px] hover:text-[#4850E4] active:text-[#2C35E0] disabled:opacity-40">
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mx-auto mt-6 md:mt-0 md:mx-[12rem] h-[15rem] md:h-[30rem] bg-[#000000] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-none rounded-br-none overflow-hidden shadow-md">
        <img
          src={Elephant}
          alt="elephant"
          className="w-[250px] h-[300px] md:w-[450px] md:h-[500px] object-contain"
        />
      </div>
    </div>
  );
}

export default AboutElephant;
