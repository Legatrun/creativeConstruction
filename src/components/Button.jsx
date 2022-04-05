import {btn} from '../styles/Button.module.css'
import Link from 'next/link'


export default function Button() {
  return (
    <Link href="/sing-up">
        <button className={btn}>
            Sing-Up
        </button>
    </Link>
  )
}
