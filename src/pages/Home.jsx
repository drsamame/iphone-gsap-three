import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hightlight from '../components/Hightlight';
import Model from '../components/Model';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
export const Home = () => {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Hightlight />
			<Model />
			<Features />
			<HowItWorks />
      <Footer />
		</main>
	);
};
export default Home;
