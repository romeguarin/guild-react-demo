import React from 'react';
import DUMMY_MEALS from '../../data/dummy-meals';
import Card from '../Card/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

type Props = {};

const AvailableMeals = (props: Props) => {
  const meals = DUMMY_MEALS.map((meal) => <MealItem {...meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
