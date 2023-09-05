import styles from './DownloadOurApp.module.css';

import celularBanner from '../../assets/celular-banner.png'
import appStore from '../../assets/app-store-logo.svg'
import playStore from '../../assets/play-store-logo.svg'



export default function DownloadOurApp(){
    return(
        <div className={styles.container}>
            <div className={styles.container__left}>
                <h2>Baixe nosso App gratuitamente!</h2>
                <p>Mais rápido, fácil e com descontos exclusivos!</p>
                <div className={styles.container__left__logos}>
                    <img src={appStore} alt="Logo App Store" />
                    <img src={playStore} alt="Logo Google Play" />
                </div>
            </div>
            <img className={styles.bannerImage} src={celularBanner} alt="Banner Celular" />
        </div>

    )

}