import React from 'react';
import Basic from './pages/a_basic';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project</h1>
      <hr />
      <Basic />
      {/* 컴포넌트 호출 <컴포넌트명 /> */}
      {/* <ReactExample />
      <Component01 /> */}

      {/* 폴더의 기본이 되는 컴포넌트 */}
      {/* <Index0826 />
      <JSX /> */}
      {/* 내용 수정 */}
    </div>
  );
}

export default App;