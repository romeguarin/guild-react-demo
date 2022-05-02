import React, { FC, useRef, useState } from 'react';
import Input from '../Input/Input';
import classes from './MealItemForm.module.css';

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => any;
}

const MealItemForm: FC<MealItemFormProps> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const enteredAmount = parseInt(amountInputRef?.current?.value ?? '0');

    if (enteredAmount <= 0) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  const inputDom = {
    id: `amount_${props.id}`,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };
  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label='Amount'
        htmlInput={inputDom}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
