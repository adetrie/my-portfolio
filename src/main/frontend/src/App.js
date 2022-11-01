import logo from './logo.svg';
import './App.css';

function App() {
    console.log(process.env.REACT_APP_PORTFOLIO_BACKEND_BASEURL)

  fetch(process.env.REACT_APP_PORTFOLIO_BACKEND_BASEURL + '/me')
      .then(res => res.json())
      .then((data) => {

      })
      .catch(console.log);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Test. {process.env.REACT_APP_PORTFOLIO_BACKEND_BASEURL}
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
    </div>
  );
}

export default App;
