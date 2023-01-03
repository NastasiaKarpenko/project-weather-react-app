import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
      <a href="https://github.com/NastasiaKarpenko/project-weather-react-app" target="_blank" rel="noopener noreferrer">Open-source code,</a> by{" "}
    <a href="https://fantastic-banoffee-9a9f78.netlify.app/" target="_blank" rel="noopener noreferrer">Anastasiia Kovalenko</a>
    </footer>
    </div>
  );
}

export default App;
