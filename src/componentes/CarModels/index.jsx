import styles from './CarModels.module.css';
import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import carData from '../../json/cardData.json';


import CardCar from '../CardCar';




export default function CarModels(){

    const [selectedCategory, setSelectedCategory] = useState('Hatch');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };


    return(
        <div id="section3" className={`${styles.container} animated-element`}>
            <div className={styles.title}>
                <p>Nossa frota de veículos</p>
                <h2>Escolha o carro do seus sonhos!</h2>
            </div>
            <div>               
                <div className={styles.optionsContainer}>
                    <button onClick={() => handleCategoryClick('Hatch')}>Hatch</button>
                    <button onClick={() => handleCategoryClick('Sedan')}>Sedan</button>
                    <button onClick={() => handleCategoryClick('SUV')}>SUV</button>
                    <button onClick={() => handleCategoryClick('Luxo')}>Luxo</button>
                </div>                
            </div>
            {selectedCategory && (
                <div>
                    <h2 className={styles.selectedCategory__title}>Categoria {selectedCategory}</h2>
                    <ul className={styles.carList}>
                        {carData.map((car) => (
                            car.category === selectedCategory &&  (
                                <li key={car.id}>
                                    <CardCar
                                        image={car.image}
                                        rating={car.rating}
                                        name={car.name}
                                        category={car.category}
                                        value={car.price}
                                    />
                                </li>
                        )
                        ))}
                    </ul>
                </div>
            )}
        </div>

    )
}