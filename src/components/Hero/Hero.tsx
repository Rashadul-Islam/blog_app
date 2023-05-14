import React from "react";
import Hero_img from "../../../assets/hero.png";
import Image from "next/image";
import author from "../../../assets/author.jpg";

const Hero = () => {
  return (
    <div className="relative w-[1216px] mx-auto">
      <Image
        src={Hero_img}
        width={1216}
        height={600}
        alt="hero"
        priority
      />
      <div className="absolute w-[598px] h-[304px] top-[360px] left-[64px] rounded-[12px] p-[40px] border-1 bg-[#FFFFFF] drop-shadow-md border-[#E8E8EA] dark:bg-[#181A2A] dark:border-[#242535]">
        <div className="flex items-start flex-col gap-[16px] w-[518px] h-[164px]">
          <p className="bg-[#4B6BFB] rounded-[6px] w-[97px] h-[28px] text-[14px] text-white leading-[20px] px-[10px] py-[4px]">
            Technology
          </p>
          <p className="w-[518px] h-[120px] text-[36px] leading-[40px] text-[#181A2A] font-semibold dark:text-white">
            The Impact of Technology on the Workplace: How Technology is
            changing
          </p>
          <div className="flex gap-[20px] items-center mt-[24px]">
            <Image
              src={author}
              alt="author"
              height={36}
              width={36}
              className="rounded-[50%]"
            />
            <p className="font-medium text-[16px] text-[#97989F]">
              Rashadul Islam
            </p>
            <p className="font-normal text-[16px] text-[#97989F]">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
