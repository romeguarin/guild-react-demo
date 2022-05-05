import { FC } from 'react';
import { CartItem } from '../../interfaces/cart-models';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';
import CartEntry from './CartEntry';

export interface CartProps {
  items: CartItem[];
  totalAmount: number;
  onModalBackdropClick: (event: any) => any;
  onCloseButtonClick: (event: any) => any;
}

const Cart: FC<CartProps> = (props) => {
  const totalAmount: string = `$${props.totalAmount}`;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {props.items.map((item, index) => (
        <CartEntry
          key={index}
          {...item}
        ></CartEntry>
      ))}
    </ul>
  );

  return (
    <Modal onBackDropClick={props.onModalBackdropClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.onCloseButtonClick}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
