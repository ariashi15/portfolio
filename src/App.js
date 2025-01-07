import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="body">
      <Projects />
      <NavBar />
    </div>
  );
}

export default App;
