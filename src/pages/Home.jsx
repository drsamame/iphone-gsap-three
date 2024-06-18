import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hightlight from "../components/Hightlight";
export const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlight />
    </main>
  );
};
export default Home;
