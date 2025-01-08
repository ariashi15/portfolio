import './App.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-light-purple text-dark-blue font-body flex justify-between">
      <Projects />
      <NavBar />
    </div>
  );
}

export default App;
