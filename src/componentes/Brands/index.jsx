import styles from './Brands.module.css';
import iconChevrolet from '../../assets/chevrolet-ic.png'
import iconVolks from '../../assets/volks-ic.png'
import iconFiat from '../../assets/fiat-ic.png'
import iconNissan from '../../assets/nissan-ic.png'
import iconMercedes from '../../assets/mercedes-ic.png'
import iconAudi from '../../assets/audi-ic.png'
import iconRenault from '../../assets/renault-ic.svg'
import iconPeugeot from '../../assets/peugeot-ic.svg'
import iconToyota from '../../assets/toyota-ic.svg'
import iconHyundai from '../../assets/hyundai-ic.svg'
import iconJeep from '../../assets/jeep-ic.png'
import iconBmw from '../../assets/bmw-ic.svg'
import iconLand from '../../assets/land-ic.png'

import { useSpring, animated } from 'react-spring';


export default function Brands(){

    const imgAnimation = useSpring({
        from: { transform: 'translateX(130%)' },
        to: { transform: 'translateX(-130%)' },
        config: { duration: 20000 },
        reset: true,
        loop: true,
      });
    return(
        <animated.div style={imgAnimation} className={styles.container}>
            <ul>
                <li>
                    <img
                        src={iconChevrolet}
                        alt='Chevrolet Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconVolks}
                        alt='Volkswagen Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconFiat}
                        alt='Fiat Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconNissan}
                        alt='Nissan Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconPeugeot}
                        alt='Peugeot Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconToyota}
                        alt='Toyota Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconRenault}
                        alt='Renault Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconHyundai}
                        alt='Hyundai Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconJeep}
                        alt='Jeep Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconMercedes}
                        alt='Mercedes Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconAudi}
                        alt='Audi Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconLand}
                        alt='Land Rover Icon'
                    />
                </li>
                <li>
                    <img
                        src={iconBmw}
                        alt='BMW Icon'
                    />
                </li>
            </ul>
        </animated.div>

    )

}