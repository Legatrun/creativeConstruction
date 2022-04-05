import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.nav_bar}>
          <Link href="/">
            <a className={style.navbar_logo} onClick={closeMobileMenu}>
              <img src="../logotipo.png" alt="logo" className={style.logo}/>
            </a>
          </Link>
          <div className={style.menu_icon} onClick={handleClick}>
            <i
              className={
                click
                  ? `fas ${style.fa_times} fa-times`
                  : `fas ${style.fa_bars} fa-bars`
              }
            />
          </div>
        </div>
        <ul
          className={
            click ? `${style.nav_menu} ${style.active}` : `${style.nav_menu}`
          }
        >
          <li className={style.nav_item}>
            <Link href="/mesaComedor">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                mesas
              </a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/espejos">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                sofás
              </a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/espejos">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                sillas
              </a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/escritorio">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                escritorios
              </a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/estantes">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                estantería
              </a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/espejos">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                espejos
              </a>
            </Link>
          </li>
          
          <li
            className={style.nav_item}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link href="/services">
              <a className={style.nav_links} onClick={closeMobileMenu}>
                Servicios <i className={!click? "fas fa-caret-down" : "fas"}  />
              </a>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
          <li>
            <Link href="/sing-up">
              <a className={style.nav_links_mobile} onClick={closeMobileMenu}>
                Sing Up
              </a>
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}
