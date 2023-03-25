import React from 'react';
import { SkillItem } from './SkillItem';
import { Row, Col } from 'antd';
import '../styles/Custom.css';

<SkillItem
  value={50}
  title={'Test title'}
  description={'dwed'}
  icon={'https://joesch.moe/api/v1/random?key=1'}
/>;

export const Skills = () => {
  return (
    <div className='container'>
      <h1>Skills</h1>
      <Row gutter={16}>
        <Col span={12} xs={24} sm={12}>
          <SkillItem
            value={80}
            title={'Java'}
            description={'dwed'}
            icon={'https://joesch.moe/api/v1/random?key=1'}
          />
        </Col>
        <Col span={12} xs={24} sm={12}>
          <SkillItem
            value={70}
            title={'SQL'}
            description={'dwed'}
            icon={'https://joesch.moe/api/v1/random?key=1'}
          />
        </Col>
        <Col span={12} xs={24} sm={12}>
          <SkillItem
            value={30}
            title={'Java'}
            description={'dwed'}
            icon={'https://joesch.moe/api/v1/random?key=1'}
          />
        </Col>
        <Col span={12} xs={24} sm={12}>
          <SkillItem
            value={90}
            title={'SQL'}
            description={'dwed'}
            icon={'https://joesch.moe/api/v1/random?key=1'}
          />
        </Col>
        <Col span={12} xs={24} sm={12}>
          <SkillItem
            value={50}
            title={'Java'}
            description={'dwed'}
            icon={'https://joesch.moe/api/v1/random?key=1'}
          />
        </Col>
        <Col span={12} xs={24} sm={12}>
          <SkillItem
            value={80}
            title={'SQL'}
            description={'dwed'}
            icon={'https://joesch.moe/api/v1/random?key=1'}
          />
        </Col>
      </Row>
    </div>
  );
};
