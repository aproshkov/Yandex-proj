import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import AppHeader from '../.././components/App-Header/AppHeader';
import MainConstructorPage from '../Constructor-Page/Main-constructor-page';

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
