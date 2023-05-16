import React from "react";
import Hero_img from "../../../assets/hero.png";
import Image from "next/image";
import author from "../../../assets/author.jpg";

const Hero = () => {
  return (
    <div className="relative lg:w-[1216px] w-[90%] mx-auto -z-50">
      <Image src={Hero_img} width={1216} height={600} alt="" priority />
      <div className="mt-7 lg:mt-0 md:mt-0 lg:absolute md:absolute lg:w-[598px] md:w-[450px] w-full lg:h-[304px] md:h-[250px] md:top-[180px] lg:top-[360px] md:left-[30px] lg:left-[64px] rounded-[12px] p-[25px] lg:p-[40px] border-1 bg-[#FFFFFF] drop-shadow-md border-[#E8E8EA] dark:bg-[#181A2A] dark:border-[#242535]">
        <div className="flex items-start flex-col gap-[16px] lg:w-[518px]">
          <p className="bg-[#4B6BFB] rounded-[6px] w-[97px] h-[28px] text-[14px] text-white leading-[20px] px-[10px] py-[4px]">
            Technology
          </p>
          <p className="lg:w-[518px] md:w-[360px] w-[340px] h-[120px] text-[18px] lg:text-[36px] md:text-[24px] leading-[35px] lg:leading-[40px] text-[#181A2A] font-semibold dark:text-white">
            The Impact of Technology on the Workplace: How Technology is
            changing
          </p>
          <div className="flex gap-[20px] items-center lg:mt-[24px]">
            <Image
              src={author}
              alt="author"
              height={36}
              width={36}
              className="rounded-[50%]"
            />
            <p className="font-medium lg:text-[16px] md:text-[14px] text-[12px] text-[#97989F]">
              Rashadul Islam
            </p>
            <p className="lg:block md:block font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#97989F]">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
