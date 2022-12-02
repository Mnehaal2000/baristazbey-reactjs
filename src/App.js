// import logo from './logo.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* header section */}
      <Header />

      {/* hero section */}
      <Hero />

      {/* {products section} */}
      <Products />

      {/* {about section} */}
      <About />

      {/* {about section} */}
      <Contact />
    </div>
  );
}

export default App;
