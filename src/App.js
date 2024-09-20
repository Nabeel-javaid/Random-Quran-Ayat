import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AyatDisplay from './components/AyatDisplay';
import ComfortButton from './components/ComfortButton';
import ComfortAyatList from './components/ComfortAyatList';
import { motion } from 'framer-motion';

const AppWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled(motion.h1)`
  font-size: 2.8rem;
  color: #2e384d;
  margin-bottom: 20px;
`;

const SubHeading = styled(motion.p)`
  font-size: 1.5rem;
  color: #58627a;
  margin-bottom: 40px;
`;

function App() {
  const [randomAyat, setRandomAyat] = useState(null);
  const [isComforting, setIsComforting] = useState(false);

  useEffect(() => {
    fetchRandomAyat();
  }, []);

  const fetchRandomAyat = async () => {
    const randomAyatNumber = Math.floor(Math.random() * 6236) + 1;
    const editions = 'en.asad,ur.junagarhi';
    try {
      const response = await fetch(`http://api.alquran.cloud/v1/ayah/${randomAyatNumber}/editions/${editions}`);
      const data = await response.json();
      if (data.code === 200) {
        setRandomAyat({
          english: data.data[0].text,
          urdu: data.data[1].text,
          ayatInfo: `${data.data[0].surah.englishName} ${data.data[0].numberInSurah}:${data.data[0].number}`,
        });
      }
    } catch (error) {
      console.error('Failed to fetch ayat:', error);
    }
  };

  return (
    <AppWrapper>
      <Heading 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Random Ayat from Quran
      </Heading>

      <SubHeading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        A source of peace and reflection
      </SubHeading>

      {randomAyat ? <AyatDisplay ayat={randomAyat} /> : 'Loading...'}

      <ComfortButton setIsComforting={setIsComforting} />

      {/* Render Comforting Ayat List if user clicks "Are you sad?" */}
      {isComforting && <ComfortAyatList />}
    </AppWrapper>
  );
}

export default App;
