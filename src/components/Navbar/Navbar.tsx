import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import d_logo from "../../../assets/d_logo.png";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme: string | undefined =
    theme === "system" ? systemTheme : theme;

  return (
    <div className="flex py-[32px] gap-[10px] h-[100px]">
      <div className="flex gap-[118px] lg:w-[1218px] md:[90%] h-[36px] mx-auto">
        <div className="w-[158px] h-[36px]">
          <Image
            src={currentTheme === "light" ? Logo : d_logo}
            alt=""
            priority
          />
        </div>
        <div className="flex items-center gap-[40px] w-[942px] h-[36px] text-[16px] leading-[24px]">
          <div className="w-[667px] h-[24px] flex justify-center items-center gap-[40px]">
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/single_post">Single Post</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/Contact">Contact</Link>
          </div>
          <div className="w-[254px] h-[36px] flex items-center gap-[40px]">
            <div className="flex items-center px-[8px] py-[16px] bg-[#F4F4F5] dark:bg-[#242535] rounded-[5px] w-[166px] h-[36px] gap-[12px]">
              <input
                className="text-[14px] w-[114px] h-[20px] leading-[20px] text-[#A1A1AA] bg-transparent focus:text-black focus:outline-none dark:placeholder:text-[#A1A1AA]"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="text-[#52525B]" size={18} />
            </div>
            <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[28px]">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() =>
                  currentTheme === "light"
                    ? setTheme("dark")
                    : setTheme("light")
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3.7px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
