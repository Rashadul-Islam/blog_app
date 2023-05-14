import React from "react";
import Image from "next/image";
import { IPost } from "@/staticData/postData";

interface Props {
  singlePost: IPost;
}

const Post: React.FC<Props> = ({ singlePost }) => {
  const { background, category, title, author, postDate } = singlePost;
  return (
    <div className="w-[392px] h-[488px] rounded-[12px] p-[16px] border border-[#E8E8EA] dark:border-[#242535]">
      <Image
        src={background}
        alt=""
        width={360}
        height={240}
        className="rounded-[6px]"
      />
      <div className="w-[97px] mt-[24px] mb-[20px] h-[28px] rounded-[6px] px-[10px] py-[4px] bg-[rgba(75,107,251,0.05)] flex items-center justify-center">
        <p className="font-medium text-[14px] text-[#4B6BFB]">{category}</p>
      </div>
      <h3 className="text-[24px] font-semibold leading-[28px] text-[#181A2A] mb-[20px] dark:text-white">
        {title}
      </h3>
      <div className="flex items-center gap-[20px] h-[36px]">
        <Image
          src={author.image}
          alt="author"
          height={36}
          width={36}
          className="rounded-[50%]"
        />
        <p className="font-medium text-[16px] text-[#97989F]">{author.name}</p>
        <p className="font-normal text-[16px] text-[#97989F]">{postDate}</p>
      </div>
    </div>
  );
};

export default Post;
