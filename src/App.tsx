import { Suspense } from "react";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MyProject from "./components/MyProject";

function App() {
  return (
    <div id="app">
      <Suspense fallback={<Loading />}>
        {/* 导航栏 */}
        <Nav></Nav>
        {/* 内容区域 */}
        <main>
          <Home />
          {false && <MyProject />}
        </main>
        {/* footer区域 */}
        <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;
