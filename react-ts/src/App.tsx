import React from 'react';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn Typescript']} />
    </div>
  );
}

export default App;
