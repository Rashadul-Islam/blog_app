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
    <div className="w-full h-[500px] bg-[#F6F6F7] dark:bg-[#141624]">
      <div className="w-[1216px] h-[254px] mx-auto flex gap-[20px] pt-[64px]">
        <div>
          <p className="text-[18px] font-semibold text-[#181A2A] dark:text-white">
            About
          </p>
          <p className="w-[280px] h-[120px] text-[16px] mt-[12px] dark:text-[#97989F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
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
        <div className="flex justify-center gap-[80px] h-[236px] w-[495px]">
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
        <div className="w-[392px] h-[254px] bg-[#FFFFFF] rounded-[12px] dark:bg-[#242535]">
          <p className="mt-[32px] text-center text-[#181A2A] text-[20px] font-semibold dark:text-white">
            Weekly Newsletter
          </p>
          <p className="text-center mt-[8px] text-[16px] text-[#696A75] dark:text-[#97989F]">
            Get blog articles and offers via email
          </p>
          <div className="relative mt-[30px] flex justify-center">
            <input
              type="text"
              placeholder="Your Email"
              className="w-[320px] h-[48px] px-[16px] py-[12px] border border-[#DCDDDF] dark:border-[#3B3C4A] rounded-[6px] focus:outline-none placeholder:text-[16px] placeholder:text-[#97989F]"
            />
            <AiOutlineMail className="absolute right-[55px] text-[16px] text-[#696A75] top-[15px]" />
          </div>
          <div className="flex justify-center">
            <button className="mt-[8px] bg-[#4B6BFB] text-white w-[320px] h-[48px] px-[20px] py-[12px] rounded-[6px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[118px] w-[1216px] border-t border-t-[#DCDDDF] mx-auto mt-[128px] flex items-center justify-between">
        <div className="w-[380px] h-[54px] flex gap-[10px] items-center">
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
            <p className="text-[16px] text-[#3B3C4A]b dark:text-white">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-[32px] text-[16px] text-[#3B3C4A] dark:text-[#BABABF]">
          <Link href="/tems-of-use">Terms Of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
