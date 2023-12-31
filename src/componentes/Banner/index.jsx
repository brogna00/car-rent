import styles from './Banner.module.css';

import carBanner from '../../assets/car-banner.png'
import appStore from '../../assets/app-store-logo.svg'
import playStore from '../../assets/play-store-logo.svg'

import { useSpring, animated } from 'react-spring';

export default function Banner(){
    const bannerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(25px)' },
        to: { opacity: 1, transform: 'translatex(0)' },
        config: { duration: 1500 },
      });

    return (
        <div className={styles.container}>
            <div className={styles.slogan}>
                <h1>
                    Desbrave novos caminhos: Alugue o carro dos seus sonhos hoje mesmo!
                </h1>
                <h2>
                    Alugue um carro aonde e quando quiser baixando nosso aplicativo.
                </h2>
                <div className={styles.slogan__images}>
                    <a href="https://www.apple.com/br/app-store/" target='blank'><img src={appStore} alt="Logo App Store" /></a>
                    <a href="https://play.google.com/store/apps?hl=pt_BR&gl=US" target='blank'><img src={playStore} alt="Logo Play Store" /></a>
                </div>
            </div>
            <animated.img
                style={bannerAnimation}
                className={styles.bannerCar}
                src={carBanner}
                alt="Car Banner Picture"
            />
        </div>
    )
}