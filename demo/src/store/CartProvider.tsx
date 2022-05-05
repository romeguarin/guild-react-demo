import React, { FC, PropsWithChildren, useReducer } from 'react';
import { CartAction, CartItem } from '../interfaces/cart-models';
import CartContext, {
  CartContextProps,
  defaultCartContext,
} from './CartContext';

const cartReducer: React.Reducer<CartContextProps, CartAction> = (
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

const CartProvider: FC<PropsWithChildren<any>> = (props) => {
  const [cartState, cartStateDispatch] = useReducer(
    cartReducer,
    defaultCartContext
  );

  const addItemToCartHandler = (item: CartItem) => {
    cartStateDispatch({
      type: 'Add',
      payload: item,
    });
  };

  const cartContext: CartContextProps = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
