import React from "react";
import { IPost, posts } from "../../staticData/postData";
import Post from "./Post";

const Main = () => {
  return (
    <div className="flex flex-wrap justify-between gap-y-[20px]">
      {posts.map((data: IPost) => (
        <Post singlePost={data} key={data.id} />
      ))}
    </div>
  );
};

export default Main;
