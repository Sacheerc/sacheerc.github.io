import React from 'react';
import CustomText from './CustomText';

const languages = [
  {
    title: 'Java',
    value: 80,
  },
  {
    title: 'Java Script',
    value: 90,
  },
  {
    title: 'Python',
    value: 80,
  },
  {
    title: 'PHP',
    value: 70,
  },
  {
    title: 'C',
    value: 80,
  },
];

const technical = [
  {
    title: 'Angular',
    value: 90,
  },
  {
    title: 'Spring Boot',
    value: 80,
  },
  {
    title: 'Android',
    value: 70,
  },
  {
    title: 'React',
    value: 60,
  },
  {
    title: 'HTML / CSS',
    value: 90,
  },
];

export const Skills = ({ theme }) => {
  const subHeading = {
    marginBottom: 30,
  };

  const progressItem = {
    marginBottom: 30,
    width: theme.isMobile ? '100%' : '90%',
  };

  return (
    <div id='skills-section' className='section'>
      <div
        className='text-center sub-heading'
        style={{ color: theme.darkerColor }}
      >
        Skills
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <div className='text-center' style={subHeading}>
            <CustomText fontSize={22} fontWeight={500} color={theme.darkColor}>
              Languages
            </CustomText>
          </div>
          <div>
            {languages.map((element, index) => (
              <div key={index} style={progressItem}>
                <div className='row'>
                  <div className='col-6'>
                    <CustomText
                      fontSize={16}
                      fontWeight={500}
                      color={theme.darkerColor}
                    >
                      {element.title}
                    </CustomText>
                  </div>
                  <div className='col-6' style={{ textAlign: 'end' }}>
                    <CustomText
                      fontSize={16}
                      fontWeight={500}
                      color={theme.darkerColor}
                    >
                      {element.value}%
                    </CustomText>
                  </div>
                </div>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    style={{
                      backgroundColor: theme.primaryColor,
                      width: `${element.value}%`,
                    }}
                    role='progressbar'
                    aria-valuenow={element.value}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='text-center' style={subHeading}>
            <CustomText fontSize={22} fontWeight={500} color={theme.darkColor}>
              Technical
            </CustomText>
          </div>
          <div>
            {technical.map((element, index) => (
              <div
                key={index}
                style={{
                  ...progressItem,
                  marginLeft: theme.isMobile ? 0 : '10%',
                }}
              >
                <div className='row'>
                  <div className='col-6'>
                    <CustomText
                      fontSize={16}
                      fontWeight={500}
                      color={theme.darkerColor}
                    >
                      {element.title}
                    </CustomText>
                  </div>
                  <div className='col-6' style={{ textAlign: 'end' }}>
                    <CustomText
                      fontSize={16}
                      fontWeight={500}
                      color={theme.darkerColor}
                    >
                      {element.value}%
                    </CustomText>
                  </div>
                </div>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    style={{
                      backgroundColor: theme.primaryColor,
                      width: `${element.value}%`,
                    }}
                    role='progressbar'
                    aria-valuenow={element.value}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
