import { FC } from 'react';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {
  count?: number;
  onClick: (event: any) => any;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{2}</span>
    </button>
  );
};

export default HeaderCartButton;
