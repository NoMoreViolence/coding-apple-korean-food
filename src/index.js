import React from 'react';
import ReactDOM from 'react-dom';
// index.js에서는 app을 직접적으로 로딩할 필요는 없어 졌습니다.
// import App from './App';
// 감싸준 RouterWrapper 컴포넌트를 넣어 줍니다.
// 이미 RouterWrapper 컴포넌트가 App.js를 가지고 있습니다.
import RouterWrapper from './router-wrapper';

// RouterWapper 컴포넌트 안에 이미 App.js가 존재합니다.
ReactDOM.render(<RouterWrapper />, document.getElementById('root'));
