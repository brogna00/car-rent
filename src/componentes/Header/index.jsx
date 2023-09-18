import styles from './Header.module.css';
import logoHeader from '../../assets/car-rent-logo.svg';

import { Link, animateScroll as scroll } from "react-scroll";

export default function Header(){
    
    return(
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <img
                    className={styles.headerLogoImage}
                    src={logoHeader}
                    alt='Key logo icon'
                />
                <h3>Aluga Car</h3>
            </div>
            <nav className={styles.headerList}>
                <ul>
                    <li >Início</li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={700}
                        >                    
                            Alugar
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                        >                    
                            Veículos
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={700}
                        >                    
                            Vantagens
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={700}
                        >                    
                            Mais Procurados
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}