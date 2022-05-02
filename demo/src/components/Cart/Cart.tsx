import { FC } from 'react';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';

export interface CartProps {
  onModalBackdropClick: (event: any) => any;
  onCloseButtonClick: (event: any) => any;
}

const Cart: FC<CartProps> = (props) => {
  const totalAmount: string = `$Total here`;

  return (
    <Modal onBackDropClick={() => {}}>
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
