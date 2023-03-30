import React from 'react';
import person from '../assets/person.png';
import CustomButton from './CustomButton';

const bioSection = {
  marginTop: 70,
  marginBottom: 30,
};

export const BioSection = ({ theme }) => {
  const bioContent = {
    fontSize: 22,
    color: theme.darkColor,
    fontWeight: 500,
  };

  const bioDetailsKey = {
    fontSize: 22,
    color: theme.darkerColor,
    fontWeight: 600,
    marginTop: 30,
  };

  const bioDetailsValue = {
    fontSize: 22,
    color: theme.darkerColor,
    fontWeight: 300,
    marginTop: 30,
  };

  const personImage = {
    width: 365,
    borderRadius: 10,
  };

  return (
    <div style={bioSection}>
      <div
        className='text-center sub-heading'
        style={{ color: theme.darkerColor }}
      >
        About Me
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <img src={person} style={personImage} alt='profile'></img>
        </div>
        <div className='col-md-8'>
          <div style={bioContent}>
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </div>
          <div className='row'>
            <div className='col-3' style={bioDetailsKey}>
              <div> Name: </div>
              <div> Date of birth:</div>
              <div> Address:</div>
              <div> Email:</div>
              <div>Phone:</div>
            </div>
            <div className='col-9' style={bioDetailsValue}>
              <div> Sachintha Rathnayake </div>
              <div> April 27, 1995</div>
              <div> San Francisco, USA</div>
              <div> sachintha@gmail.con</div>
              <div> +94 711 23456</div>
            </div>
          </div>
          <CustomButton
            height={46}
            borderRadius={50}
            fontSize={24}
            fontWeight={400}
            color={theme.lighterColor}
            backgroundColor={theme.primaryColor}
            marginTop={30}
          >
            Download CV
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
