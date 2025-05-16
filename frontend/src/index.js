import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

const theme = {
  token: {
    colorPrimary: '#00ffff',
    colorText: '#ffffff',
    colorBgContainer: '#1e1e2f',
    colorBgLayout: '#1e1e2f',
    colorBorderSecondary: '#2b2b3c',
  },
    components: {
    Input: {
      colorBgContainer: '#ffffff',   // make input background white
      colorText: '#000000',          // make input text black for contrast
    },
    InputNumber: {
      colorBgContainer: '#ffffff',
      colorText: '#000000',
    },
    Select: {
      colorBgContainer: '#ffffff',
      colorText: '#000000',
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
