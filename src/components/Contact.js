import React from 'react';
import SvgIconButton from './SvgIconButton';
import CustomText from './CustomText';
import CustomButton from './CustomButton';

export const Contact = ({ theme }) => {
  const contactRow = { marginBottom: 20 };

  return (
    <div id='contact-section' className='section'>
      <div
        className='text-center sub-heading'
        style={{ color: theme.darkerColor }}
      >
        Contact
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='row' style={contactRow}>
            <div className='col-3'>
              <SvgIconButton
                icon={
                  'M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z'
                }
                color={theme.primaryColor}
                width={35}
                height={35}
              />
            </div>
            <div className='col-9'>
              <div>
                <CustomText
                  fontSize={18}
                  fontWeight={600}
                  color={theme.darkerColor}
                >
                  Call Me
                </CustomText>
              </div>
              <div>
                <CustomText
                  fontSize={18}
                  fontWeight={500}
                  color={theme.lightColor}
                >
                  94 71-924-8090
                </CustomText>
              </div>
            </div>
          </div>
          <div className='row' style={contactRow}>
            <div className='col-3'>
              <SvgIconButton
                icon={
                  'M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z'
                }
                color={theme.primaryColor}
                width={35}
                height={35}
              />
            </div>
            <div className='col-9'>
              <div>
                <CustomText
                  fontSize={18}
                  fontWeight={600}
                  color={theme.darkerColor}
                >
                  Email
                </CustomText>
              </div>
              <div>
                <CustomText
                  fontSize={18}
                  fontWeight={500}
                  color={theme.lightColor}
                >
                  sacheerc@gmail.com
                </CustomText>
              </div>
            </div>
          </div>
          <div className='row' style={contactRow}>
            <div className='col-3'>
              <SvgIconButton
                icon={
                  'M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S13.1,12,12,12z M18,10.2C18,6.57,15.35,4,12,4s-6,2.57-6,6.2 c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8 c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z'
                }
                color={theme.primaryColor}
                width={35}
                height={35}
              />
            </div>
            <div className='col-9'>
              <div>
                <CustomText
                  fontSize={18}
                  fontWeight={600}
                  color={theme.darkerColor}
                >
                  Location
                </CustomText>
              </div>
              <div>
                <CustomText
                  fontSize={18}
                  fontWeight={500}
                  color={theme.lightColor}
                >
                  Gampaha, Sri Lanka
                </CustomText>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='contact'>
            <input
              className='form-control'
              type='text'
              placeholder='Name'
            ></input>
          </div>
          <div className='contact'>
            <input
              className='form-control'
              type='email'
              placeholder='Email'
            ></input>
          </div>
          <div className='contact'>
            <textarea className='form-control' placeholder='Message'></textarea>
          </div>
          <div className='contact'>
            <CustomButton
              width={'100%'}
              height={40}
              fontSize={18}
              color={theme.lighterColor}
              backgroundColor={theme.primaryColor}
              borderRadius={0}
            >
              Send Message
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
