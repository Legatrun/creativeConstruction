import style from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.title}>Contacto</div>
            <Link href="">
              <a className={style.link}>hola@creativeconstruction.com</a>
            </Link>
            <Link href="">
              <a className={style.link}>Terminos del servicio</a>
            </Link>
            <Link href="">
              <a className={style.link}>Politica de reembolso</a>
            </Link>
          </div>
          <div className={style.column}>
            <div className={style.title}>Servicios</div>
            <Link href="">
              <a className={style.link}>Pulido</a>
            </Link>
            <Link href="">
              <a className={style.link}>Arma tu espacio</a>
            </Link>
            <Link href="">
              <a className={style.link}>Proyectos</a>
            </Link>
          </div>
          <div className={style.column}>
            <div className={style.title}>Tiendas</div>
            <Link href="">
              <a className={style.link}>La Paz</a>
            </Link>
            <Link href="">
              <a className={style.link}>Cochabamba</a>
            </Link>
            <Link href="">
              <a className={style.link}>Santa Cruz</a>
            </Link>
          </div>
          <div className={style.column}>
            <div className={style.title}></div>
            <Link href="">
              <a className={style.link}>
                <i className="fab fa-facebook-f"/>
              </a>
            </Link>
            <Link href="">
              <a className={style.link}>
                <i className="fab fa-instagram"/> 
              </a>
            </Link>
            <Link href="">
              <a className={style.link}>
                <i className="fab fa-youtube"/> 
              </a>
            </Link>
            <Link href="">
              <a className={style.link}>
                <i className="fab fa-twitter"/> 
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
