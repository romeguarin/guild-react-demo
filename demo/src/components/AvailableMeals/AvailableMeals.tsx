import React, { useEffect, useState } from 'react';
import fireBaseCofig from '../../config/firebase.json';
import { CartItem } from '../../interfaces/cart-models';
import { MealProps } from '../../interfaces/meal';
import Card from '../Card/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

interface AvailableMealsProps {
  addToCart: (item: CartItem) => any;
}

const AvailableMeals = (props: AvailableMealsProps) => {
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
      addToCart={props.addToCart}
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
