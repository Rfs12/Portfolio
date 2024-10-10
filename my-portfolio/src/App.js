import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from './components/Skills/skills';
import Works from './components/works/works';
import Contact from './components/Contact/contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/> 
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
