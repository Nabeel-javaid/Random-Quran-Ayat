import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ayatsHeartBroken } from './HeartBroken';
import { ayatsSad } from './sad';
import { ayatsHopeless } from './hopeless';
import '../css/QuranHealing.css';

function QuranHealing() {
  const [selectedAyats, setSelectedAyats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = () => {
    const allAyats = [...ayatsHeartBroken, ...ayatsSad, ...ayatsHopeless];
    const filteredAyats = allAyats.filter(ayat => 
      ayat.arabic.includes(searchQuery) || 
      ayat.english.toLowerCase().includes(searchQuery.toLowerCase()) || 
      ayat.urdu.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSelectedAyats(getAyats(filteredAyats));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleShare = (ayat) => {
    const shareText = `${ayat.arabic}\nEnglish: ${ayat.english}\nUrdu: ${ayat.urdu}\nReference: ${ayat.reference}`;
    if (navigator.share) {
      navigator.share({
        title: 'Comforting Ayat from the Quran',
        text: shareText,
      }).catch(error => console.error('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser. Copy the text to share:\n' + shareText);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Find Comfort in the Quran</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for ayats..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      
      <div className="button-container">
        <button onClick={handleHurtClick} className="button">Are you hurt?</button>
        <button onClick={handleSadClick} className="button">Are you sad?</button>
        <button onClick={handleHopelessClick} className="button">Are you hopeless?</button>
      </div>

      <div className="ayat-container">
        {selectedAyats.map((ayat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="ayat"
          >
            <div className="line"></div>
            <div className="content">
              <h3 className="arabic">{ayat.arabic}</h3>
              <p className="english"><strong>English:</strong> {ayat.english}</p>
              <p className="urdu"><strong>Urdu:</strong> {ayat.urdu}</p>
              <p className="reference"><em>{ayat.reference}</em></p>
              <button onClick={() => handleShare(ayat)} className="button">Share Ayat</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default QuranHealing;
