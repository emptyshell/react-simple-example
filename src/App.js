import React from 'react';
import './App.css';
import Store from './features/Store/Store';

/**
 * @return App main page
 */
function App() {
  /**
   * returns main app jsx
   */
  return (
    <div className="App">
      <header className="header">My react app</header>
      <Store />
    </div>
  );
}

export default App;
