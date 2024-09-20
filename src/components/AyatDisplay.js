import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AyatWrapper = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Translation = styled.p`
  font-size: 1.3rem;
  margin: 10px 0;
  line-height: 1.6;
`;

const AyatInfo = styled.span`
  font-weight: bold;
  color: #58627a;
`;

const AyatDisplay = ({ ayat }) => {
  return (
    <AyatWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Translation><strong>English:</strong> {ayat.english}</Translation>
      <Translation><strong>Urdu:</strong> {ayat.urdu}</Translation>
      <AyatInfo>{ayat.ayatInfo}</AyatInfo>
    </AyatWrapper>
  );
};

export default AyatDisplay;
