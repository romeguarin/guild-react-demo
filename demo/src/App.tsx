import React, { Fragment } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Cart
        onCloseButtonClick={() => {}}
        onModalBackdropClick={() => {}}
      />
      <Header onHeaderButtonClick={() => {}} />
      <Meals />
    </Fragment>
  );
}

export default App;
