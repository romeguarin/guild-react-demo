import React, { Fragment, useReducer, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import { CartAction, CartItem, CartModel } from './interfaces/cart-models';

const initialCart: CartModel = {
  items: [],
  totalAmount: 0,
};

const cartReducer: React.Reducer<CartModel, CartAction> = (
  currentState,
  action
) => {
  if (action.type === 'Add' && action.payload) {
    const newState = { ...currentState };
    newState.items.push({ ...action.payload });
    newState.totalAmount += action.payload.price;
    return newState;
  }
  return currentState;
};

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

  // #region Cart items reducer

  const [cart, cartActionDispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (item: CartItem) => {
    cartActionDispatch({
      type: 'Add',
      payload: item,
    });
  };

  // #endregion

  return (
    <Fragment>
      {isCartShown && (
        <Cart
          items={cart.items}
          totalAmount={cart.totalAmount}
          onCloseButtonClick={hideCartHandler}
          onModalBackdropClick={hideCartHandler}
        />
      )}
      <Header
        count={cart.items.length}
        onHeaderButtonClick={displayCartHandler}
      />
      <Meals addToCart={addToCart} />
    </Fragment>
  );
}

export default App;
