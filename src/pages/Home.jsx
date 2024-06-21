import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hightlight from "../components/Hightlight";
import  Model  from "../components/Model";
import Features from "../components/Features";
export const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlight />
      <Model />
      <Features />
    </main>
  );
};
export default Home;
