import React from 'react';
import { theme, Card, Avatar } from 'antd';

const { Meta } = Card;

export const SkillItem = ({ value, title, description, icon }) => {
  const { token } = theme.useToken();
  value = (value / 100) * 96;
  const pointerOffset = value - 1;

  const cardStyles = {
    color: token.colorPrimary,
    borderRadius: token.borderRadius,
    width: '100%',
    marginTop: 16,
  };

  const progressBarStyles = {
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: 'gray',
    height: '20px',
    width: '96%',
    borderRadius: '10px',
    top: '10px',
    position: 'absolute',
  };

  const progressBarSelectorStyles = {
    marginLeft: '2%',
    marginRight: '2%',
    height: '20px',
    backgroundColor: token.colorPrimary,
    width: value + '%',
    borderRadius: '10px',
    top: '10px',
    position: 'absolute',
  };

  const progressBarPointorStyles = {
    marginLeft: '2%',
    marginRight: '2%',
    height: '40px',
    backgroundColor: token.colorPrimary,
    width: '40px',
    borderRadius: '100%',
    top: '0px',
    left: pointerOffset + '%',
    position: 'absolute',
  };

  const progressBarWrapper = {
    position: 'relative',
    marginBottom: '40px',
  };

  return (
    <Card theme='dark' style={cardStyles} loading={false}>
      <Meta
        avatar={<Avatar src={icon} />}
        title={title}
        description={description}
      />
      <div style={progressBarWrapper}>
        <div style={progressBarStyles}></div>
        <div style={progressBarSelectorStyles}></div>
        <div style={progressBarPointorStyles}></div>
      </div>
    </Card>
  );
};
