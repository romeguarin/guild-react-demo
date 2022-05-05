import { FC, useContext } from 'react';
import CartContext, { CartContextProps } from '../../store/CartContext';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {
  onClick: (event: any) => any;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = (props) => {
  const cartCtx: CartContextProps = useContext(CartContext);
  const itemCount = cartCtx.items.length;
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
