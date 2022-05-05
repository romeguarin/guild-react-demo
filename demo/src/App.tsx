import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  // #region cart display state

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

  // #endregion

  return (
    <CartProvider>
      {isCartShown && (
        <Cart
          onCloseButtonClick={hideCartHandler}
          onModalBackdropClick={hideCartHandler}
        />
      )}
      <Header onHeaderButtonClick={displayCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
