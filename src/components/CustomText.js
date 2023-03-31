import React from 'react';

const CustomText = ({
  fontWeight,
  fontSize,
  color,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  children,
}) => {
  return (
    <span
      style={{
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
    </span>
  );
};

export default CustomText;
