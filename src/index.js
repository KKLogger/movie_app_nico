import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// Render  함수로  Component를 생성 JSX 개념 !! 자바스크립트와 HMTL 의 결합
//Render 함수에는 하나의 Component만 넣을 수 있습니다.
//아래와 같이 render함수를 한번 더 호출하는 방법도 있지만 App.js 에 추가하는 방법도 있습니다.
// ReactDOM.render(<React.StrictMode><Potato/></React.StrictMode>,document.getElementById('potato'));
//react application 은 한번에 하나의 component만 rendering 할 수 있다

// JSX -> component에 정보를 보낼 수 있습니다.
