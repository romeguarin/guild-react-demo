import { FC } from 'react';
import { BaseComponentProps } from '../../interfaces/react-helper-interfaces';
import classes from './Card.module.css';

interface CardProps extends BaseComponentProps {}

const Card: FC<CardProps> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
