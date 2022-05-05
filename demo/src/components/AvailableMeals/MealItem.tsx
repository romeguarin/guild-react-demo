import React, { FC } from 'react';
import { CartItem } from '../../interfaces/cart-models';
import { MealProps } from '../../interfaces/meal';
import { BaseComponentProps } from '../../interfaces/react-helper-interfaces';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface MealItemProps extends BaseComponentProps, MealProps {
  addToCart: (item: CartItem) => any;
}

const MealItem: FC<MealItemProps> = (props) => {
  const addToCartHandler = (amount: number) => {
    props.addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
    });
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
