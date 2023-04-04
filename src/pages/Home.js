import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { IntroSection } from '../components/IntroSection';
import { BioSection } from '../components/BioSection';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';

export const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <IntroSection id='intro-section' theme={theme} />
      <BioSection id='about-section' theme={theme} />
      <Banner theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
    </>
  );
};
