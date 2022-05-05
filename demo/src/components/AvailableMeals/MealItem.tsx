import React, { FC, useContext } from 'react';
import { MealProps } from '../../interfaces/meal';
import { BaseComponentProps } from '../../interfaces/react-helper-interfaces';
import CartContext, { CartContextProps } from '../../store/CartContext';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface MealItemProps extends BaseComponentProps, MealProps {}

const MealItem: FC<MealItemProps> = (props) => {
  const cartCtx: CartContextProps = useContext(CartContext);
  const addToCartHandler = (amount: number) => {
    if (cartCtx.addItem) {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
      });
    }
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
