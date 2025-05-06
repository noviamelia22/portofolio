import { motion } from 'framer-motion';
import ScrollToHash from './Components/ScrollToHash';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
  >
    <ScrollToHash />
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
    <Footer />
  </motion.div>
);

export default Home;
