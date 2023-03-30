import React from 'react';

const CustomButton = ({
  height,
  width,
  borderRadius,
  icon,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  children,
}) => {
  const iconStyle = {
    marginLeft: '0.5rem',
    verticalAlign: 'middle',
  };

  return (
    <button
      className='btn'
      style={{
        height,
        width,
        borderRadius,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        fontSize,
        fontWeight,
        color,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
      }}
    >
      {children}
      {icon && <img src={icon} alt='icon' style={iconStyle} />}
    </button>
  );
};

export default CustomButton;
