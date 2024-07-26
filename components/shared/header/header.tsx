import React from "react"
import style from './header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
    <div className="container">
      <div className={style.header_menu}>
        <div className={style.header_logo}>
          <a href="">
            <img className={style.logo} src="./logos/logo_black_header.png" alt="logo" />
          </a>
        </div>
        <div className={style.nav_bar}>
          <ul>
            <li><a href=""></a>Доставка</li>
            <li><a href=""></a>Статьи</li>
            <li><a href=""></a>О нас</li>
            <li><a href=""></a>Контакты</li>
          </ul>
        </div>
        <div className={style.header_support}>
          <a href='mailto:info@esco.ru' className={`${style.support} ${style.email}`}>info@esco-doors.com</a>
          <a href='tel:+78002225544' className={`${style.support} ${style.phone}`}>8 (800) 550-81-79</a>
        </div>
        <button className={style.header_catalog}>Каталог</button>
      </div>
    </div>
  </header>
  );
}