import React from 'react';
import { IntroSection } from '../components/IntroSection';
import { BioSection } from '../components/BioSection';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Home = ({ theme }) => {
  return (
    <>
      <IntroSection theme={theme} />
      <BioSection theme={theme} />
      <Banner theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </>
  );
};
