import React from 'react';
import {
  BurgerIcon, Button, ListIcon, Logo, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <nav className={style.headerContainer}>
      <a href='#' className={style.menuContainer} id={style.constructor}>
        <BurgerIcon type="primary" />
        <Button htmlType="button" type="secondary" size="small" id={style.buttons}>
          Конструктор
        </Button>
      </a>
      <a href='#' className={style.menuContainer} id={style.salesBand}>
        <ListIcon type="primary" />
        <Button htmlType="button" type="secondary" size="small" id={style.buttons}>
          Лента заказов
        </Button>
      </a>
      <span>
        <Logo />
      </span>
      <a href='#' className={style.menuContainer} id={style.private}>
        <ProfileIcon type="primary" />
        <Button htmlType="button" type="secondary" size="small" id={style.buttons}>
          Личный кабинет
        </Button>
      </a>
    </nav>
  );
}
