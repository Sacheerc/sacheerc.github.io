import React from 'react';
import './App.css';
import './styles/Custom.css';
import { Layout, Space, ConfigProvider } from 'antd';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { MainSlider } from './components/MainSlider';
import { Skills } from './components/Skills';
import { Bio } from './components/Bio';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Portfolio } from './components/Portfolio';

const { Header, Footer, Content } = Layout;

const defaultData = {
  borderRadius: 6,
  colorPrimary: 'blue',
};

const App = () => {
  const [data, setData] = useState(defaultData);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Space
        direction='vertical'
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header>
            <NavBar></NavBar>
          </Header>
          <Content>
            <>
              <MainSlider />
              <Bio />
              <Skills />
              <Experience />
              <Education />
              <Portfolio />
            </>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Space>
    </ConfigProvider>
  );
};

export default App;
