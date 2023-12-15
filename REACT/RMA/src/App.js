import logo from './png.svg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        Learn Trading with RMA Capital
        </p>
        <a
          className="App-link"
          href="https://facebook.com/rmamarkets"
          target="_blank"
          rel="noopener noreferrer"
        >
           RMA Capital
        </a>
      </header>
    </div>
  );
}

export default App;
