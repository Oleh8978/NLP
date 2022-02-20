import React from 'react';

// components
import Header from './components/header';
import Body from './components/body';
import Pagination from './components/pagination';

interface IProps {}

const App: React.FC<IProps>  = () => {
  return (
    <div className="main">
      <Header />
      <Body />
      <Pagination />
    </div>
  );
}

export default App
