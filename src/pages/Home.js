import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { IntroSection } from '../components/IntroSection';
import { BioSection } from '../components/BioSection';

export const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <IntroSection theme={theme} />
      <BioSection theme={theme} />
    </>
  );
};
