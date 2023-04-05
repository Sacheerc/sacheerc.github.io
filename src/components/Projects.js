import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import project1 from '../assets/custom_html_landing_page_2.jpg';
import project2 from '../assets/portfolio_website_1.jpg';
import project3 from '../assets/portfolio_website_2.jpg';
import project4 from '../assets/cover_4.jpg';

const projects = [
  {
    title: 'Modern Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: project1,
    demoLink: '',
  },
  {
    title: 'Modern Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: project2,
    demoLink: '',
  },
  {
    title: 'Modern Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: project3,
    demoLink: '',
  },
  {
    title: 'Modern Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: project4,
    demoLink: '',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projectItem = {
  width: '90%',
  padding: 15,
};

const image = {
  width: '100%',
  borderRadius: 10,
  marginBottom: 15,
};

export const Projects = ({ theme }) => {
  return (
    <div id='projects-section' className='section'>
      <div
        className='text-center sub-heading'
        style={{ color: theme.darkerColor }}
      >
        Projects
      </div>
      <div>
        <Carousel
          responsive={responsive}
          containerClass='carousel-container'
          itemClass='carousel-item-padding-40-px'
          infinite={true}
        >
          {projects &&
            projects.map((project, index) => (
              <div key={index} className='project-item' style={projectItem}>
                <img src={project.image} alt='project 1' style={image}></img>
                <div>
                  <CustomText
                    fontSize={18}
                    fontWeight={600}
                    marginBottom={10}
                    color={theme.darkColor}
                  >
                    {project.title}
                  </CustomText>
                </div>
                <div style={{ marginTop: 5, marginBottom: 10 }}>
                  <CustomText
                    fontSize={16}
                    fontWeight={400}
                    color={theme.lightColor}
                  >
                    {project.description}
                  </CustomText>
                </div>
                <CustomButton
                  backgroundColor={theme.primaryColor}
                  color={theme.lighterColor}
                >
                  Demo
                </CustomButton>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};
