import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import lightFooter from "../../../assets/f_light.png";
import darkFooter from "../../../assets/d_footer.png";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-[#F6F6F7] dark:bg-[#141624]">
      <div className="lg:w-[1216px] w-[90%] lg:h-[254px] mx-auto flex lg:flex-row flex-col-reverse gap-y-[40px] pt-[64px]">
        <div className="h-full w-full md:flex md:justify-between lg:gap-[20px]">
          <div>
            <p className="text-[18px] font-semibold text-[#181A2A] dark:text-white">
              About
            </p>
            <p className="w-[280px] h-[120px] text-[16px] mt-[12px] dark:text-[#97989F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-[24px] text-[16px] font-semibold text-[#3B3C4A] dark:text-white">
              Email:
              <span className="font-normal text-[#181A2A] dark:text-[#97989F]">
                {" "}
                info@jstemplate.net
              </span>
            </p>
            <p className="mt-[4px] text-[16px] font-semibold text-[#3B3C4A] dark:text-white">
              Phone:
              <span className="font-normal text-[#181A2A] dark:text-[#97989F]">
                {" "}
                01780788117
              </span>
            </p>
          </div>
          <div className="flex lg:justify-center lg:gap-[80px] mt-8 lg:mt-0 md:mt-0 md:justify-between justify-around h-[236px] lg:w-[495px] md:w-[320px]">
            <div>
              <p className="text-[18px] font-semibold text-[#181A2A] dark:text-white">
                Quick Link
              </p>
              <div className="flex flex-col gap-y-[8px] mt-[24px] text-[16px] text-[#3B3C4A] dark:text-[#BABABF]">
                <Link href="/home">Home</Link>
                <Link href="/home">About</Link>
                <Link href="/home">Blog</Link>
                <Link href="/home">Archived</Link>
                <Link href="/home">Author</Link>
                <Link href="/home">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-semibold text-[#181A2A] dark:text-white">
                Category
              </p>
              <div className="flex flex-col gap-y-[8px] mt-[24px] text-[16px] text-[#3B3C4A] dark:text-[#BABABF]">
                <Link href="/lifestyle">Lifestyle</Link>
                <Link href="/technology">Technology</Link>
                <Link href="/travel">Travel</Link>
                <Link href="/business">Business</Link>
                <Link href="/economy">Economy</Link>
                <Link href="/sports">Sports</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[392px] md:w-[392px] w-[90%] mx-auto h-[254px] md:mb-10 bg-[#FFFFFF] rounded-[12px] dark:bg-[#242535] lg:px-[36px] md:px-[36px] px-[20px]">
          <p className="mt-[32px] text-center text-[#181A2A] text-[20px] font-semibold dark:text-white">
            Weekly Newsletter
          </p>
          <p className="text-center mt-[8px] text-[14px] lg:text-[16px] md:text-[16px] text-[#696A75] dark:text-[#97989F]">
            Get blog articles and offers via email
          </p>
          <div className="relative mt-[30px]">
            <input
              type="email"
              placeholder="Your Email"
              className="lg:w-[320px] w-full h-[48px] px-[16px] py-[12px] border border-[#DCDDDF] dark:border-[#3B3C4A] rounded-[6px] focus:outline-none placeholder:text-[16px] placeholder:text-[#97989F]"
            />
            <AiOutlineMail className="absolute right-[15px] text-[17px] text-[#696A75] top-[15px]" />
          </div>
          <div className="flex justify-center">
            <button className="mt-[8px] bg-[#4B6BFB] text-white lg:w-[320px] w-full h-[48px] px-[20px] py-[12px] rounded-[6px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[118px] lg:w-[1216px] w-full border-t border-t-[#DCDDDF] mx-auto lg:mt-[128px] mt-[50px] flex lg:flex-row flex-col-reverse lg:items-center justify-between">
        <div className="lg:w-[380px] md:w-[380px] w-[90%] h-[54px] flex gap-[10px] items-center lg:mx-0 mx-[5%] lg:pb-0 pb-3">
          <Image
            src={theme === "light" ? lightFooter : darkFooter}
            alt=""
            height={48}
            width={48}
          />
          <div>
            <p className="text-[20px] text-[#141624] dark:text-white">
              Meta<span className="font-extrabold">Blog</span>
            </p>
            <p className="lg:text-[16px] md:text-[16px]  text-[14px] text-[#3B3C4A]b dark:text-white">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center mt-5 gap-[32px] lg:text-[16px] md:text-[16px] text-[12px] text-[#3B3C4A] dark:text-[#BABABF]">
          <Link href="/tems-of-use">Terms Of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
