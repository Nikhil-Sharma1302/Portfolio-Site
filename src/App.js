import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => (
  <div className="bg-primary text-white font-sans">
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    <Footer/>
  </div>
);

export default App;
