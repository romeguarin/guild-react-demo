import { FC, Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCart/HeaderCartButton';
import classes from './Header.module.css';

interface HeaderProps {
  count?: number;
  onHeaderButtonClick: (event: any) => any;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          count={props.count}
          onClick={props.onHeaderButtonClick}
        />
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt='Table full of food.'
        />
      </div>
    </Fragment>
  );
};

export default Header;
