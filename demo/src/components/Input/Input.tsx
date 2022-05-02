import React from 'react';
import classes from './Input.module.css';

interface InputProps {
  label: string;
  htmlInput: {
    id: string;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.htmlInput.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.htmlInput}
      />
    </div>
  );
});

export default Input;
