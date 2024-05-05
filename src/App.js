import './App.css';
import AppRouter from './routes/App';
import React from 'react';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App container">
      <header className="header">
        <Container>
          <h4 className="header-title text-start">Podcaster</h4><hr className=""/>
        </Container>
      </header>
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}


export default App;
