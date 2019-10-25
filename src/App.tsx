import React from 'react';
import Button from '@material/react-button';
import logo from './logo.svg';
import './App.css';
import '@material/react-button/dist/button.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Button
        raised
        className='button-alternate'
        onClick={() => console.log('clicked!')}
      >
        Click Me!
        </Button>
    </div>
  );
}

export default App;
