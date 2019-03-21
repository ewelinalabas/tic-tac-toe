import React, { Component } from 'react';
//import './App.css';
import { Board } from './Board'

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Tic-tac-toe</a>
        </nav>
        <Board />
      </div>
        );
      }
    }
    
export default App;