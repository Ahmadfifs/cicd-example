import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World 
        </p>
        <a
          className="App-link"
          href="https://github.com/Ahmadfifs/cicd-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          simple CI CD project 
        </a>
      </header>
    </div>
  );
}

export default App;
