import React from 'react';
import Menu from './components/Menu';
import StorageInfo from './components/StorageInfo';

const App = () => {
  return (
    <main className="App">
      <div className="wrapper">
        <Menu />
        <StorageInfo />
      </div>
    </main>
  );
}

export default App;
