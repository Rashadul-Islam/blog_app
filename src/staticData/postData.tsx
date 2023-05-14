import { StaticImageData } from "next/image";
import author from "../../assets/author.jpg";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";
import post4 from "../../assets/post4.png";
import post5 from "../../assets/post5.png";
import post6 from "../../assets/post6.png";
import post7 from "../../assets/post7.png";
import post8 from "../../assets/post8.png";
import post9 from "../../assets/post9.png";

export interface IPost {
  id: number;
  title: string;
  category: string;
  background: StaticImageData;
  post: string;
  author: {
    name: string;
    image: StaticImageData;
  };
  postDate: string;
}

export const posts: IPost[] = [
  {
    id: 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post1,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 2,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post2,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 3,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post3,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 4,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post4,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 5,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post5,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 6,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post6,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 7,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post7,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 8,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post8,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
  {
    id: 9,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    background: post9,
    post: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`,
    author: {
      name: "Rashadul Islam",
      image: author,
    },
    postDate: "August 20, 2022",
  },
];
