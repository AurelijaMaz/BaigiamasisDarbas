import React from 'react';
import UsersManager from './components/UsersManager';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App" >
        <UsersManager />
      </div>
    );
  }
}

export default App;