import React from 'react';
import { Menu } from 'antd';
import { HomeTwoTone, ContactsTwoTone } from '@ant-design/icons';
import { useState } from 'react';

// Menu items array
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeTwoTone />,
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <ContactsTwoTone />,
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState('home');

  const handleMenuClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme='dark'
      mode='horizontal'
      selectedKeys={[current]}
      onClick={handleMenuClick}
    >
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
