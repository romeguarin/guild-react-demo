import React, { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const displayCartHandler = (event: Event) => {
    // setIsCartShown((current) => {
    //   return false;
    // });
    setIsCartShown(true);
  };

  function hideCartHandler(event: Event) {
    setIsCartShown(false);
  }

  return (
    <Fragment>
      {isCartShown && (
        <Cart
          onCloseButtonClick={hideCartHandler}
          onModalBackdropClick={hideCartHandler}
        />
      )}
      <Header onHeaderButtonClick={displayCartHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
