import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigation;
/*
페이지가 리로딩 되면 React component 들은 kill 되고 다시 create 됩니다.
-> a 태그를 이용한 페이지 이동은 페이지를 리로딩 시킵니다.
-> 설정한 Route와 연결이 되지 않습니다.
-> a 태그 대신 router dom 의 Link component를 이용합니다.
-> Linker 는 반드시 Router 안에서 실행되어야 합니다.*/
