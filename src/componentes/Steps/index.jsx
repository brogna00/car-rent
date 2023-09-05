import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import styles from './Steps.module.css';
import locationIcon from '../../assets/location.svg'
import dateIcon from '../../assets/date.svg'
import carIcon from '../../assets/car.svg'

export default function Steps(){

    useEffect(() => {
        // Configurar as opções do ScrollReveal
        const config = {
          origin: 'bottom',   // Define a origem da animação
          duration: 3000,     // Duração da animação em milissegundos
          distance: '100px',   // Distância da animação
          delay: 350,         // Atraso em milissegundos
          easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
        };
    
        // Inicializar o ScrollReveal com as opções
        ScrollReveal().reveal('.animated-element', config);
      }, []);

    return(
        <div className={`${styles.container} animated-element`}>
            <div className={styles.container__title}>
                <h3>Como funciona</h3>
                <h2>Alugue seu carro seguindo estes 3 passos</h2>
            </div>
            <div className={styles.container__steps}>
                <div className={styles.container__steps__step}>
                    <img
                        src={locationIcon}     
                    />
                    <h3>Escolha localização</h3>
                    <p>Selecione sua localização e encontre <br /> o melhor carro para você!</p>
                </div>

                <div className={styles.container__steps__stepContrast} >
                    <img
                        src={dateIcon}
                    />
                    <h3>Data de retirada</h3>
                    <p>Escolha o dia e horário que você <br /> deseja retirar o veículo</p>
                </div>

                <div className={styles.container__steps__step}>
                    <img
                        src={carIcon}
                    />
                    <h3>Alugue o carro!</h3>
                    <p>Alugue o carro e o entregaremos <br /> diretamente a você.</p>
                </div>
            </div>
        </div>

    )

}
