import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
/*라우트가 url을 가져와 비교할 때 '완전 일치 비교'가 아닌 '포함 여부 비교' 이기 때문에
 '/' 라고 path를 지정하면 모든 path에 해당 컴포넌트가 추가 된다.
 따라서 '일치비교'를 하기 위해선 속성으로 exact = {true} 를 추가해야 한다.*/
export default App;
