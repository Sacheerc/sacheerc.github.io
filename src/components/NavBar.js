import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeTwoTone, ContactsTwoTone } from '@ant-design/icons';
import { useState } from 'react';

// Menu items array
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeTwoTone />,
    route: '/',
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <ContactsTwoTone />,
    route: '/about',
  },
];

const NavBar = () => {
  // const [current, setCurrent] = useState('home');

  // const handleMenuClick = (e) => {
  //   setCurrent(e.key);
  // };

  return (
    <Menu theme='dark' mode='horizontal'>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.route}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
