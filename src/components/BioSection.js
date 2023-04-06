import React from 'react';
import person from '../assets/person.png';
import CustomButton from './CustomButton';

export const BioSection = ({ theme }) => {
  const bioContent = {
    fontSize: theme.isMobile ? 20 : 22,
    color: theme.darkColor,
    fontWeight: 500,
    marginTop: theme.isMobile ? 20 : 0,
  };

  const bioDetailsKey = {
    fontSize: theme.isMobile ? 18 : 22,
    color: theme.darkerColor,
    fontWeight: 600,
  };

  const bioDetailsValue = {
    fontSize: theme.isMobile ? 18 : 22,
    color: theme.darkerColor,
    fontWeight: 300,
  };

  const personImage = {
    width: theme.isMobile ? '100%' : 365,
    borderRadius: 10,
    margin: 'auto',
  };

  return (
    <div id='bio-section' className='section'>
      <div
        className='text-center sub-heading'
        style={{ color: theme.darkerColor }}
      >
        About Me
      </div>
      <div className='row'>
        <div className='col-md-4 d-flex'>
          <img src={person} style={personImage} alt='profile'></img>
        </div>
        <div className='col-md-8'>
          <div style={bioContent}>
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </div>
          <div className='row mt-3'>
            <div className='col-4 col-md-3' style={bioDetailsKey}>
              <div> Name: </div>
            </div>
            <div className='col-8 col-md-9' style={bioDetailsValue}>
              <div> Sachintha Rathnayake </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 col-md-3' style={bioDetailsKey}>
              <div> {theme.isMobile ? 'DOB' : 'Date of birth:'} </div>
            </div>
            <div className='col-8 col-md-9' style={bioDetailsValue}>
              <div> April 27, 1995</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 col-md-3' style={bioDetailsKey}>
              <div> Address:</div>
            </div>
            <div className='col-8 col-md-9' style={bioDetailsValue}>
              <div> San Francisco, USA</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 col-md-3' style={bioDetailsKey}>
              <div> Email:</div>
            </div>
            <div className='col-8 col-md-9' style={bioDetailsValue}>
              <div> sachintha@gmail.con</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 col-md-3' style={bioDetailsKey}>
              <div>Phone:</div>
            </div>
            <div className='col-8 col-md-9' style={bioDetailsValue}>
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
