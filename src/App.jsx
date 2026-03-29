import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="bg-white scroll-smooth">
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
