import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Main from "../components/Post/Main";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="w-[1216px] mx-auto mt-[120px] mb-[115px]">
        <h3 className="font-bold text-[24px] text-[#181A2A] mb-[32px] dark:text-white">
          Latest Posts
        </h3>
        <Main />
      </div>
      <Footer />
    </main>
  );
}
