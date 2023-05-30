import React from 'react';
import {
  BurgerIcon, Button, ListIcon, Logo, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <header className={style.headerContainer}>
      <nav className={style.menuContainer} id={style.constructor}>
        <BurgerIcon type="primary" />
        <Button htmlType="button" type="secondary" size="small">
          Конструктор
        </Button>
      </nav>
      <nav className={style.menuContainer} id={style.salesBand}>
        <ListIcon type="primary" />
        <Button htmlType="button" type="secondary" size="small">
          Лента заказов
        </Button>
      </nav>
      <span>
        <Logo />
      </span>
      <nav className={style.menuContainer} id={style.private}>
        <ProfileIcon type="primary" />
        <Button htmlType="button" type="secondary" size="small">
          Личный кабинет
        </Button>
      </nav>
    </header>
  );
}
