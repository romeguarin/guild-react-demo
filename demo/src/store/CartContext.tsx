import React from 'react';
import { CartItem, CartModel } from '../interfaces/cart-models';

export interface CartContextProps extends CartModel {
  addItem?: (item: CartItem) => any;
}

export const defaultCartContext: CartContextProps = {
  items: [],
  totalAmount: 0,
};

const CartContext = React.createContext<CartContextProps>(defaultCartContext);

export default CartContext;
