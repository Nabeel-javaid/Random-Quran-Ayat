import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  background-color: #4caf50;
  color: white;
  padding: 12px 25px;
  margin-top: 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ComfortButton = ({ setIsComforting }) => {
  return (
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsComforting(true)}
    >
      Are you sad?
    </Button>

    
  );
};

export default ComfortButton;
