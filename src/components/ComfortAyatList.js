import React, { useState } from 'react';
import { ayatsHeartBroken } from './HeartBroken';
import { ayatsSad } from './sad';
import { ayatsHopeless } from './hopeless';

function QuranHealing() {
  const [selectedAyats, setSelectedAyats] = useState([]);

  const handleHurtClick = () => {
    setSelectedAyats(ayatsHeartBroken);
  };

  const handleSadClick = () => {
    setSelectedAyats(ayatsSad);
  };

  const handleHopelessClick = () => {
    setSelectedAyats(ayatsHopeless);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Find Comfort in the Quran</h2>
      
      <button onClick={handleHurtClick} style={styles.button}>Are you hurt?</button>
      <button onClick={handleSadClick} style={styles.button}>Are you sad?</button>
      <button onClick={handleHopelessClick} style={styles.button}>Are you hopeless?</button>
      
      {selectedAyats.length > 0 && (
        <div style={styles.ayatContainer}>
          {selectedAyats.map((ayat, index) => (
            <div key={index} style={styles.ayat}>
              <h3 style={styles.arabic}>{ayat.arabic}</h3>
              <p><strong>English:</strong> {ayat.english}</p>
              <p><strong>Urdu:</strong> {ayat.urdu}</p>
              <p style={styles.reference}><em>{ayat.reference}</em></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Styles
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
  },
  ayatContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  ayat: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  arabic: {
    fontSize: '1.5em',
    color: '#2c3e50',
  },
  reference: {
    fontStyle: 'italic',
    color: '#7f8c8d',
  },
};

export default QuranHealing;
