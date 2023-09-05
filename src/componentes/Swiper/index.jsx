import styles from './Swiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import './swiper.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import onixSwiper from '../../assets/onix-swiper.png'
import corollaSwiper from '../../assets/corolla-swiper.png'
import tcrossSwiper from '../../assets/tcross-swiper.png'
import bmwSwiper from '../../assets/330i-swiper.png'
import ratingIcon from '../../assets/star-icon.svg';


import iconLand from '../../assets/land-ic.png'

export default function Carrossel(){
    return(
        <div id="section5" className={`${styles.container} animated-element`}>
            <p className={styles.subtitle}>Os melhores</p>
            <h2 className={styles.title}>Os carros mais bem avaliados por vocês!</h2>
            <Swiper 
                className={styles.swiperContainer}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{clickable:true}}
                autoplay={{delay: 3000}}
            >
                <SwiperSlide className={styles.slideItem}>
                    <img className={styles.slideItem__image} src={onixSwiper} />
                    <div className={styles.slideItem__text}>
                        <h3>Chevrolet Onix</h3>
                        <p>Categoria Hatch</p>
                        <div className={styles.rating}>
                            <img src={ratingIcon} alt="Rating icon" />
                            <p>4.9</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideItem}>
                <img className={styles.slideItem__image} src={corollaSwiper} />
                    <div className={styles.slideItem__text}>
                        <h3>Toyota Corolla</h3>
                        <p>Categoria Sedan</p>
                        <div className={styles.rating}>
                            <img src={ratingIcon} alt="Rating icon" />
                            <p>4.9</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideItem}>
                <img className={styles.slideItem__image} src={tcrossSwiper} />
                    <div className={styles.slideItem__text}>
                        <h3>Volkswagen T-Cross</h3>
                        <p>Categoria SUV</p>
                        <div className={styles.rating}>
                            <img src={ratingIcon} alt="Rating icon" />
                            <p>4.9</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideItem}>
                <img className={styles.slideItem__image} src={bmwSwiper} />
                    <div className={styles.slideItem__text}>
                        <h3>BMW 330i</h3>
                        <p>Categoria Luxo</p>
                        <div className={styles.rating}>
                            <img src={ratingIcon} alt="Rating icon" />
                            <p>4.9</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )

}