import React, { Fragment } from 'react';
import AvailableMeals from '../AvailableMeals/AvailableMeals';
import classes from './Meals.module.css';

type Props = {};

const Meals = (props: Props) => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
