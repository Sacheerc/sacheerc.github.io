import React from 'react';
import './App.css';
import './styles/Custom.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, Space, ConfigProvider } from 'antd';
import { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';

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
            <Routes>
              <>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </>
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Space>
    </ConfigProvider>
  );
};

export default App;
