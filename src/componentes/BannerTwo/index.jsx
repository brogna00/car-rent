
import styles from './BannerTwo.module.css';
import carBanner from '../../assets/car-banner-two.png'
import moneyIcon from '../../assets/money-icon.svg'
import driverIcon from '../../assets/driver-icon.svg'
import hoursIcon from '../../assets/hour-icon.svg'
import supportIcon from '../../assets/support-icon.svg'



export default function BannerTwo(){

    return(
        <div id="section4" className={`${styles.container} animated-element`}>
            <img
                className={styles.bannerImage}
                src={carBanner}
                alt='Red Car'
            />
            <div className={styles.container__right}>
                <div className={styles.container__right__title}>
                    <p>Por que nos escolher</p>
                    <h2>Nós oferecemos a melhor experiencia com<br/> aluguel de veículos</h2>
                </div>
                
                <ul className={styles.container__right__list}>
                    <li>
                        <img 
                            className={styles.list__icon}
                            src={moneyIcon}
                            alt='Money icon'
                        />
                        <h3>Melhor preço</h3>
                       
                    </li>
                    <li>
                        <img 
                            className={styles.list__icon}
                            src={driverIcon}
                            alt='Diver icon'
                        />
                        <h3>Melhores motoristas</h3>                        
                    </li>
                    <li>
                        <img 
                            className={styles.list__icon}
                            src={hoursIcon}
                            alt='Clock icon'
                        />
                        <h3>24h de funcionamento</h3>
                       
                    </li>
                    <li>
                        <img 
                            className={styles.list__icon}
                            src={supportIcon}
                            alt='Support icon'
                        />
                        <h3>Suporte 7 dias da semana</h3>                        
                    </li>
                </ul>
            </div>
        </div>

    )

}