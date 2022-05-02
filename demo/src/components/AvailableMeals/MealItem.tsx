import React, { FC } from 'react';
import { MealProps } from '../../interfaces/meal';
import { BaseComponentProps } from '../../interfaces/react-helper-interfaces';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface MealItemProps extends BaseComponentProps, MealProps {}

const MealItem: FC<MealItemProps> = (props) => {
  const addToCartHandler = (amount: number) => {};
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
