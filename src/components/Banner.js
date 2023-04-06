import React from 'react';
import CustomText from './CustomText';

export const Banner = ({ theme }) => {
  const bannerStyle = {
    backgroundColor: theme.primaryColor,
  };

  const counterSize = theme.isMobile ? 25 : 40;
  const textSize = theme.isMobile ? 16 : 24;

  return (
    <div
      className='row text-center d-flex align-items-center mx-auto banner'
      style={bannerStyle}
    >
      <div className='col-4'>
        <div>
          <CustomText
            color={theme.lighterColor}
            fontSize={counterSize}
            fontWeight={400}
          >
            03+
          </CustomText>
        </div>
        <div>
          <CustomText
            color={theme.lighterColor}
            fontSize={textSize}
            fontWeight={400}
          >
            Years experience
          </CustomText>
        </div>
      </div>
      <div className='col-4'>
        <div>
          <CustomText
            color={theme.lighterColor}
            fontSize={counterSize}
            fontWeight={400}
          >
            15+
          </CustomText>
        </div>
        <div>
          <CustomText
            color={theme.lighterColor}
            fontSize={textSize}
            fontWeight={500}
          >
            Completed project
          </CustomText>
        </div>
      </div>
      <div className='col-4'>
        <div>
          <CustomText
            color={theme.lighterColor}
            fontSize={counterSize}
            fontWeight={500}
          >
            02+
          </CustomText>
        </div>
        <div>
          <CustomText
            color={theme.lighterColor}
            fontSize={textSize}
            fontWeight={500}
          >
            Companies worked
          </CustomText>
        </div>
      </div>
    </div>
  );
};
