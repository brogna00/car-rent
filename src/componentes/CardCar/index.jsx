import styles from './CardCar.module.css';
import ratingIcon from '../../assets/star-icon.svg';

export default function CardCar(props){
    const { image, rating, name, category, value } = props;
    return(
        <div className={styles.container}>
            <div className={styles.container__img}>
                <img src={image} alt="Car image" />
            </div>
            <div className={styles.rating} > 
                <img src={ratingIcon} alt="Rating icon" />
                <h4>{rating}</h4>
                <p>| 99+ Avaliações</p>
            </div>
            <h3>{name}</h3>
            <p className={styles.category}>{category}</p>
            <div className={styles.rent}>
                <p className={styles.rent__value}>R${value}/dia</p>
                <a className={styles.rent__rent} href='#'>Alugar agora</a>
            </div>
        </div>

    )

}