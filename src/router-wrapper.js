import React, { Component } from 'react';
// 우리가 설치한 모듈에서 제공해주는 태그입니다.
// 이 태그가 있어야 라우팅을 진행한 코드 부분이 작동하게 됩니다.
import { BrowserRouter } from 'react-router-dom';

// APP을 감싸주기 위해서 APP을 import 해 줍니다
import App from './App';

class RouterWrapper extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default RouterWrapper;
