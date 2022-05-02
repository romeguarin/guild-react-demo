import React, { useEffect, useState } from 'react';
import fireBaseCofig from '../../config/firebase.json';
import { MealProps } from '../../interfaces/meal';
import Card from '../Card/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

type Props = {};

const AvailableMeals = (props: Props) => {
  const [mealsData, setMealsData] = useState<MealProps[]>([]);

  const fetchMeals = async () => {
    const response = await fetch(fireBaseCofig.url);
    const json = (await response.json()) as MealProps[];

    setMealsData(json);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const meals = mealsData.map((meal) => (
    <MealItem
      key={meal.id}
      {...meal}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
