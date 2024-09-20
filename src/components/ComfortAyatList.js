import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const audioBaseURL = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/';

// Comforting ayats with exact ayah numbers
const comfortingAyats = [
  {
    id: 1,
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    text: 'Verily, with every difficulty there is relief. (94:6)',
    translation: 'بیشک تنگی کے ساتھ آسانی ہے',
    ayahNumber: 6185  // Ayah number
  },
  {
    id: 2,
    arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا',
    text: 'Do not lose hope, nor be sad. (3:139)',
    translation: 'غم نہ کرو اور نہ ہمت ہارو',
    ayahNumber: 477
  },
  {
    id: 3,
    arabic: 'فَاصْبِرْ ۖ إِنَّ وَعْدَ اللَّهِ حَقٌّ',
    text: 'So be patient. Indeed, the promise of Allah is truth. (30:60)',
    translation: 'پس صبر کرو بیشک اللہ کا وعدہ حق ہے',
    ayahNumber: 3415
  },
  {
    id: 4,
    arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
    text: 'Indeed, Allah is with the patient. (2:153)',
    translation: 'بیشک اللہ صبر کرنے والوں کے ساتھ ہے',
    ayahNumber: 153
  },
  // Add more comforting ayats with the correct ayahNumber...
];

// Hopeful ayats with exact ayah numbers
const hopefulAyats = [
  {
    id: 1,
    arabic: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ',
    text: 'Do not despair of the mercy of Allah. (12:87)',
    translation: 'اللہ کی رحمت سے مایوس نہ ہوں',
    ayahNumber: 1729
  },
  {
    id: 2,
    arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    text: 'Indeed, with hardship comes ease. (94:6)',
    translation: 'بیشک تنگی کے ساتھ آسانی ہے',
    ayahNumber: 6185
  },
  // Add more hopeful ayats with correct ayahNumber...
];

const ListWrapper = styled(motion.div)`
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AyatItem = styled(motion.div)`
  padding: 15px;
  margin-bottom: 15px;
  border-left: 4px solid #4caf50;
  background-color: #f0f4f8;
  border-radius: 5px;
`;

const AyatArabic = styled.p`
  font-size: 1.6rem;
  font-family: 'Scheherazade New', serif;
  direction: rtl;
  text-align: right;
  color: #2e384d;
  margin-bottom: 5px;
`;

const AyatText = styled.p`
  font-size: 1.2rem;
  color: #2e384d;
  margin-bottom: 5px;
`;

const AyatTranslation = styled.p`
  font-size: 1rem;
  color: #58627a;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

const AudioButton = styled.button`
  background-color: #2e384d;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.9rem;

  &:hover {
    background-color: #3a3d50;
  }
`;

const ComfortAyatList = () => {
  const [currentAyats, setCurrentAyats] = useState([]);
  
  const handleSadClick = () => {
    setCurrentAyats(comfortingAyats);
  };

  const handleHopelessClick = () => {
    setCurrentAyats(hopefulAyats);
  };

  const playAudio = (ayahNumber) => {
    const audioUrl = `${audioBaseURL}${ayahNumber}.mp3`;
    new Audio(audioUrl).play();
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={handleSadClick}>Are you sad?</Button>
        <Button onClick={handleHopelessClick}>Are you hopeless?</Button>
      </div>

      <ListWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {currentAyats.map(ayat => (
          <AyatItem key={ayat.id}>
            <AyatArabic>{ayat.arabic}</AyatArabic>
            <AyatText>{ayat.text}</AyatText>
            <AyatTranslation>{ayat.translation}</AyatTranslation>
            <AudioButton >
            </AudioButton>
          </AyatItem>
        ))}
      </ListWrapper>
    </div>
  );
};

export default ComfortAyatList;
