import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';

import { DataContext } from './Providers/Data'

function App() {
  const {
    isLoadingData, data
  } = useContext(DataContext)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isLoadingData ? 'I am loading data...' : 'Data has been loaded!'}
        </p>

        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
