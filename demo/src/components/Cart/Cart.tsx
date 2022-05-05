import { FC, useContext } from 'react';
import CartContext, { CartContextProps } from '../../store/CartContext';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';
import CartEntry from './CartEntry';

export interface CartProps {
  onModalBackdropClick: (event: any) => any;
  onCloseButtonClick: (event: any) => any;
}

const Cart: FC<CartProps> = (props) => {
  const cartCtx: CartContextProps = useContext(CartContext);

  const totalAmount: string = `$${cartCtx.totalAmount}`;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item, index) => (
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
