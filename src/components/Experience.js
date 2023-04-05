import React from 'react';
import SvgIconButton from './SvgIconButton';
import CustomText from './CustomText';
import { Link } from 'react-router-dom';

const experienceMap = [
  {
    title: 'BSc (Hon) in Computer Science',
    place: 'University of Colombo School of Computing',
    time: '2016-2021',
  },
  {
    title: 'MSc in Computer Science',
    place: 'University of Colombo School of Computing',
    time: '2006-2010',
  },
  {
    title: 'Certification in Machine Learning',
    place: 'University of Colombo',
    time: '2006-2010',
  },
  {
    title: 'BS in Computer Science',
    place: 'University of Colombo',
    time: '2006-2010',
  },
  {
    title: 'Certification in Machine Learning',
    place: 'University of Colombo',
    time: '2006-2010',
  },
  {
    title: 'BS in Computer Science',
    place: 'University of Colombo',
    time: '2006-2010',
  },
];

export const Experience = ({ theme }) => {
  const border = {
    borderColor: theme.darkerColor,
  };

  const pointer = {
    backgroundColor: theme.primaryColor,
  };

  const backgroundColor = {
    backgroundColor: theme.primaryColor,
  };

  return (
    <div id='qualifications-section' className='section'>
      <div
        className='text-center sub-heading'
        style={{ color: theme.darkerColor }}
      >
        Qualifications
      </div>
      <div
        className='d-flex justify-content-center'
        style={{ marginBottom: 30 }}
      >
        <Link
          className='nav-link'
          style={{ marginRight: 50 }}
          onClick={() => alert('clicked')}
        >
          <SvgIconButton
            icon='M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z'
            color={theme.primaryColor}
            width={40}
            height={40}
            marginRight={10}
          />
          <CustomText
            fontSize={22}
            fontWeight={400}
            color={theme.primaryColor}
            marginTop={5}
          >
            Education
          </CustomText>
        </Link>

        <Link className='nav-link' to={''}>
          <SvgIconButton
            icon='M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z'
            color={theme.darkerColor}
            width={40}
            height={40}
            marginRight={10}
          />
          <CustomText
            fontSize={22}
            fontWeight={400}
            color={theme.darkerColor}
            marginTop={5}
          >
            Work
          </CustomText>
        </Link>
      </div>
      <div>
        {experienceMap &&
          experienceMap.map((element, index) => (
            <div
              key={index}
              className={
                index % 2 === 1
                  ? 'experience-item item-right'
                  : 'experience-item item-left'
              }
              style={border}
            >
              <div className='pointer' style={pointer}></div>
              <div className='inner'>
                <div>
                  <CustomText
                    fontWeight={500}
                    fontSize={22}
                    color={theme.primaryColor}
                  >
                    {element.title}
                  </CustomText>
                </div>
                <div>
                  <CustomText
                    fontWeight={500}
                    fontSize={20}
                    color={theme.darkerColor}
                  >
                    {element.place}
                  </CustomText>
                </div>
                <div className='label' style={backgroundColor}>
                  <CustomText
                    fontWeight={500}
                    fontSize={16}
                    marginLeft={8}
                    marginRight={8}
                    color={theme.lighterColor}
                  >
                    {element.time}
                  </CustomText>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
