import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ayatsHeartBroken } from './HeartBroken';
import { ayatsSad } from './sad';
import { ayatsHopeless } from './hopeless';

function QuranHealing() {
  const [selectedAyats, setSelectedAyats] = useState([]);

  const getAyats = (ayats) => {
    return ayats.map(ayat => ({
      arabic: ayat.arabic,
      english: ayat.english,
      urdu: ayat.urdu,
      reference: ayat.reference,
    }));
  };

  const handleHurtClick = () => {
    setSelectedAyats(getAyats(ayatsHeartBroken));
  };

  const handleSadClick = () => {
    setSelectedAyats(getAyats(ayatsSad));
  };

  const handleHopelessClick = () => {
    setSelectedAyats(getAyats(ayatsHopeless));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Find Comfort in the Quran</h2>
      
      <button onClick={handleHurtClick} style={styles.button}>Are you hurt?</button>
      <button onClick={handleSadClick} style={styles.button}>Are you sad?</button>
      <button onClick={handleHopelessClick} style={styles.button}>Are you hopeless?</button>

      <div style={styles.ayatContainer}>
        {selectedAyats.map((ayat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={styles.ayat}
          >
            <h3 style={styles.arabic}>{ayat.arabic}</h3>
            <p style={styles.english}><strong>English:</strong> {ayat.english}</p>
            <p style={styles.urdu}><strong>Urdu:</strong> {ayat.urdu}</p>
            <p style={styles.reference}><em>{ayat.reference}</em></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ayat: {
    margin: '10px 0',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fefefe',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '600px',
    transition: 'transform 0.2s',
    "&:hover": {
      transform: 'scale(1.02)',
    },
  },
  arabic: {
    fontSize: '20px',
    marginBottom: '5px',
  },
  english: {
    color: '#555',
    margin: '5px 0',
  },
  urdu: {
    color: '#555',
    margin: '5px 0',
  },
  reference: {
    color: '#999',
    fontStyle: 'italic',
  },
};

export default QuranHealing;
