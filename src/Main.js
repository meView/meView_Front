import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./layout/App";
import About from "./pages/about/About";
import Question from "./pages/question/Question";
import TestCode2 from "./pages/testcode/TestCode2";
import Mainpage from "./pages/main/Mainpage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Mainpage />} />
          <Route path="about" element={<About />} />
          <Route path="testcode" element={<Question />} />
          <Route path="testcode2" element={<TestCode2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
