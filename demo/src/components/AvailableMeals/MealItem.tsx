import React, { FC } from 'react';
import { MealProps } from '../../interfaces/meal';
import { BaseComponentProps } from '../../interfaces/react-helper-interfaces';
import classes from './MealItem.module.css';

interface MealItemProps extends BaseComponentProps, MealProps {}

const MealItem: FC<MealItemProps> = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <form>
          <button>+ Add</button>
        </form>
      </div>
    </li>
  );
};

export default MealItem;
