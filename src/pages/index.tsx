import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Main from "../components/Post/Main";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="lg:w-[1216px] w-[90%] mx-auto lg:mt-[120px] md:mt-[150px] mt-8 mb-[115px]">
        <h3 className="font-bold text-[18px] md:text-[24px] lg:text-[24px] text-[#181A2A] lg:mb-[32px] md:mb-[32px] mb-5 dark:text-white">
          Latest Posts
        </h3>
        <Main />
      </div>
      <Footer />
    </main>
  );
}
