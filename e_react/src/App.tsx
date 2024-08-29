import React from "react";
import { Route, Routes } from "react-router-dom";

import Basic from "./pages/a_basic";
import Hooks from "./pages/b_hooks";
import Todos01 from './pages/z_todos';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project</h1>
      {/*  - 기초 (리액트 개념, 컴포넌트, JSX, Props) */}
      {/* <Basic /> */}

      {/* Routes태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장 */}
        {/* path속성: 해당 Routes 내에서 사용하는 URL 경로 */}
        {/* element속성: 해당 path속성과 일치하는 경우 보여질 컴포넌트 */}
        <Route path="/basic" element={<Basic />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path='/todos01' element={<Todos01 />} />
      </Routes>
  

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
