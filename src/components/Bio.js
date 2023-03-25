import React from 'react';
import { Row, Col } from 'antd';
import { Image } from 'antd';
import '../styles/Custom.css';

export const Bio = () => {
  return (
    <div className='container'>
      <h1>Bio Section</h1>
      <Row gutter={16}>
        <Col span={12} xs={24} sm={8}>
          <Image
            width={250}
            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          />
        </Col>
        <Col span={12} xs={24} sm={16}>
          <h1>I'm Sachintha Madushan Rathnayake</h1>
          <p>
            I'm Sachintha Rathnayake. Graduated with BSc (Hons) in Computer
            Science. Specialized in Software Development and designing, Machine
            Learning, and Graphic Designing
          </p>
        </Col>
      </Row>
    </div>
  );
};
