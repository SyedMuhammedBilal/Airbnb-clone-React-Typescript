import React from 'react'
import Home from './components/Home';
import Header from './components/Header';

const App:React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment> 
  )
}

export default App;
