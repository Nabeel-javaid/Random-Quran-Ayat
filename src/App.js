import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AyatDisplay from './components/AyatDisplay';
import ComfortButton from './components/ComfortButton';
import ComfortAyatList from './components/ComfortAyatList';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import CurrentIslamicDate from './components/currentIslamicDate';  // <-- Import the Islamic Date component

// Styling for the main app wrapper
const AppWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* For positioning the Islamic date */
`;

// Styling for the heading
const Heading = styled(motion.h1)`
  font-size: 2.8rem;
  color: #2e384d;
  margin-bottom: 20px;
`;

// Styling for the subheading
const SubHeading = styled(motion.p)`
  font-size: 1.5rem;
  color: #58627a;
  margin-bottom: 40px;
`;

// Styling for the Islamic date notification banner
const DateBanner = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fff5e1;
  color: #2e384d;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  text-align: center;
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
      const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyatNumber}/editions/${editions}`);
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

      {/* Add the Islamic date in a small notification banner */}
      <DateBanner>
        <CurrentIslamicDate />
      </DateBanner>

      <SubHeading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        A source of peace and reflection
      </SubHeading>

      {randomAyat ? <AyatDisplay ayat={randomAyat} /> : 'Loading...'}

      <ComfortButton setIsComforting={setIsComforting} />

      {isComforting && <ComfortAyatList />}
      <Analytics />
    </AppWrapper>
    
  );
}

export default App;
