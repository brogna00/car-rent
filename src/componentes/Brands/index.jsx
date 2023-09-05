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
                    />
                </li>
                <li>
                    <img
                        src={iconVolks}
                    />
                </li>
                <li>
                    <img
                        src={iconFiat}
                    />
                </li>
                <li>
                    <img
                        src={iconNissan}
                    />
                </li>
                <li>
                    <img
                        src={iconPeugeot}
                    />
                </li>
                <li>
                    <img
                        src={iconToyota}
                    />
                </li>
                <li>
                    <img
                        src={iconRenault}
                    />
                </li>
                <li>
                    <img
                        src={iconHyundai}
                    />
                </li>
                <li>
                    <img
                        src={iconJeep}
                    />
                </li>
                <li>
                    <img
                        src={iconMercedes}
                    />
                </li>
                <li>
                    <img
                        src={iconAudi}
                    />
                </li>
                <li>
                    <img
                        src={iconLand}
                    />
                </li>
                <li>
                    <img
                        src={iconBmw}
                    />
                </li>
            </ul>
        </animated.div>

    )

}