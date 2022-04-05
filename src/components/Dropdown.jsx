import style from '../styles/Dropdown.module.css'
import React, { useState } from "react";
import {MenuItems} from "./MenuItems";
import Link from 'next/link'

export default function Dropdown() {
  const [click, setClick] = useState(false)
  
  const handleClick = ()=>setClick(!click)

    return (
    <>
        <ul onClick={handleClick}
            className={click ? `${style.dropdown_menu} ${style.clicked}` : `${style.dropdown_menu}`}
        >
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link
                        href={item.path}
                        onClick={()=> setClick(false)}
                        >
                            <a className={style.dropdown_link}>
                                {item.title}
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}
