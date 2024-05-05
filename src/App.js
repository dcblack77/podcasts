import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import AppRouter from './routes/App';
import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="App container">
        <header className="header">
          <Container>
            <h4 className="header-title text-start">Podcaster</h4>
            <hr className="" />
          </Container>
        </header>
        <div className="container">
          <AppRouter />
        </div>
      </div>
    </QueryClientProvider>
  );
}



export default App;
