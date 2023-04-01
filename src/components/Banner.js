import React from 'react';
import CustomText from './CustomText';

export const Banner = ({ theme }) => {
  const bannerStyle = {
    backgroundColor: theme.primaryColor,
  };

  return (
    <div
      className='row text-center d-flex align-items-center mx-auto banner'
      style={bannerStyle}
    >
      <div className='col-4'>
        <div>
          <CustomText color={theme.lighterColor} fontSize={40} fontWeight={400}>
            03+
          </CustomText>
        </div>
        <div>
          <CustomText color={theme.lighterColor} fontSize={24} fontWeight={400}>
            Years experience
          </CustomText>
        </div>
      </div>
      <div className='col-4'>
        <div>
          <CustomText color={theme.lighterColor} fontSize={40} fontWeight={400}>
            15+
          </CustomText>
        </div>
        <div>
          <CustomText color={theme.lighterColor} fontSize={24} fontWeight={500}>
            Completed project
          </CustomText>
        </div>
      </div>
      <div className='col-4'>
        <div>
          <CustomText color={theme.lighterColor} fontSize={40} fontWeight={500}>
            02+
          </CustomText>
        </div>
        <div>
          <CustomText color={theme.lighterColor} fontSize={24} fontWeight={500}>
            Companies worked
          </CustomText>
        </div>
      </div>
    </div>
  );
};
