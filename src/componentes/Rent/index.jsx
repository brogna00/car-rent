import styles from './Rent.module.css'
import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const CarRentalForm = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };
  
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div id="section2" className={styles.container}>
      <label>
        <p>Localização:</p>
        <input 
          type="text" 
          value={location} 
          placeholder="Escolher localização..."
          onChange={handleLocationChange} />
      </label>
      <label>
        <p>Data de Retirada:</p>
        <input type="date" value={pickupDate} onChange={handlePickupDateChange} min={currentDate} />
      </label>
      <label>
        <p>Data de Devolução:</p>
        <input type="date" value={returnDate} onChange={handleReturnDateChange} min={pickupDate} />
      </label>
      <button className={styles.botao}>
        Procurar
      </button>
    </div>
  );
};

export default CarRentalForm;
