import React from 'react';
import { CartItem } from '../../interfaces/cart-models';
import classes from './CartEntry.module.css';

interface CartEntryProps extends CartItem {}

const CartEntry = (props: CartEntryProps) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => {}}>−</button>
        <button onClick={() => {}}>+</button>
      </div>
    </li>
  );
};

export default CartEntry;
