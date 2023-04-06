import React from 'react';
import mainDp from '../assets/mainDp.png';
import CustomButton from './CustomButton';
import SvgIconButton from './SvgIconButton';

const iconSet = {
  marginTop: 40,
};

export const IntroSection = ({ theme }) => {
  const titlePrimary = {
    color: theme.primaryColor,
  };

  const titleSecondary = {
    color: theme.secondaryColor,
  };

  const topText = {
    fontSize: theme.isMobile ? '25px' : '32px',
    color: theme.primaryColor,
  };
  console.log(theme.isMobile);
  const subTitle = {
    fontSize: theme.isMobile ? '25px' : '35px',
    fontWeight: '400',
    marginTop: 20,
    color: theme.darkColor,
  };

  const socialMediaIconSize = theme.isMobile ? 40 : 50;
  const socialMediaIconSpace = theme.isMobile ? 27 : 32;

  return (
    <div id='intro-section' className='row'>
      <div className='col-md-6 d-flex align-items-center'>
        <div className='ms-auto'>
          <div style={topText}>HELLO!</div>
          <div className='title' style={titleSecondary}>
            I am
          </div>
          <div className='title' style={titlePrimary}>
            Sachintha
          </div>
          <div style={subTitle}>Senior Software Engineer</div>
          <p style={{ color: theme.lightColor }}>
            High level experience in web design and producing quality work.
          </p>
          <CustomButton
            height={theme.isMobile ? 47 : 57}
            borderRadius={50}
            fontSize={theme.isMobile ? 20 : 26}
            fontWeight={400}
            color={theme.lighterColor}
            backgroundColor={theme.primaryColor}
            marginRight={20}
          >
            HIRE ME
          </CustomButton>
          <CustomButton
            height={theme.isMobile ? 47 : 57}
            borderRadius={50}
            fontSize={theme.isMobile ? 20 : 26}
            fontWeight={400}
            color={theme.lighterColor}
            backgroundColor={theme.darkerColor}
          >
            MY WORKS
          </CustomButton>
          <div style={iconSet}>
            <SvgIconButton
              icon='M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z'
              color={theme.primaryColor}
              width={socialMediaIconSize}
              height={socialMediaIconSize}
              marginRight={socialMediaIconSpace}
            />
            <SvgIconButton
              icon='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'
              color={theme.primaryColor}
              width={socialMediaIconSize}
              height={socialMediaIconSize}
              marginRight={socialMediaIconSpace}
            />
            <SvgIconButton
              icon='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'
              color={theme.primaryColor}
              width={socialMediaIconSize}
              height={socialMediaIconSize}
              marginRight={socialMediaIconSpace}
            />
            <SvgIconButton
              icon='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z'
              color={theme.primaryColor}
              width={socialMediaIconSize}
              height={socialMediaIconSize}
              marginRight={socialMediaIconSpace}
            />
          </div>
        </div>
      </div>
      <div className='col-md-6 ms-auto image-wrapper'>
        <svg
          viewBox='0 0 561 611'
          className='image'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse
            cx='274.278'
            cy='257.761'
            rx='226.685'
            ry='153.018'
            transform='rotate(-36.1822 274.278 257.761)'
            fill={theme.primaryColor}
          />
          <ellipse
            cx='307.861'
            cy='381.385'
            rx='226.685'
            ry='118.394'
            transform='rotate(-36.1822 307.861 381.385)'
            fill={theme.primaryColor}
          />
        </svg>
        <img className='image-dp' src={mainDp} alt='main dp'></img>
      </div>
    </div>
  );
};
