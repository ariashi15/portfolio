import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-light-purple text-dark-blue font-body flex justify-between">
      <div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
