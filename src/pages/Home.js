import React from 'react';
import { MainSlider } from '../components/MainSlider';
import { Bio } from '../components/Bio';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Portfolio } from '../components/Portfolio';

export const Home = () => {
  return (
    <>
      <MainSlider />
      <Bio />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
    </>
  );
};
