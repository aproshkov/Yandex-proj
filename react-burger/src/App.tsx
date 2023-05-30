import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/App-Header/AppHeader';
import MainConstructorPage from './components/Constructor-Page/MainConstructorPage';

function App() {
  return (
    <>
      <AppHeader />
      {/* <Routes> */}
      <MainConstructorPage/>
      {/* </Routes> */}
    </>
  );
}

export default App;
