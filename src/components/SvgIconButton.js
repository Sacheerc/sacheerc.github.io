import React from 'react';

const SvgIconButton = ({
  icon,
  color,
  width,
  height,
  marginLeft,
  marginRight,
  onClick,
}) => {
  const iconStyle = {
    width: width || '24px',
    height: height || '24px',
    marginLeft: marginLeft || '0',
    marginRight: marginRight || '0',
  };

  return (
    <svg
      onClick={onClick}
      viewBox='0 0 24 24'
      fill={color || 'currentColor'}
      style={iconStyle}
    >
      <path d={icon} />
    </svg>
  );
};

export default SvgIconButton;
