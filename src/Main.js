import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./layout/App";
import About from "./pages/about/About";
import Question from "./pages/question/Question";
import TestCode2 from "./pages/testcode/TestCode2";
import Mainpage from "./pages/main/Mainpage";
import Homepage from "./pages/home/Homepage";
import Answer from "./pages/answer/Answer";
import MeviewStrength from "./pages/meview/MeviewStrength";
import MeviewWeakness from "./pages/meview/MeviewWeakness";
import MeviewProject from "./pages/meview/MeviewProject";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Mainpage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="testcode" element={<Question />} />
          <Route path="answer" element={<Answer />} />
          <Route path="testcode2" element={<TestCode2 />} />
          <Route path="meview/capability" element={<Outlet />}>
            <Route path="strength" element={<MeviewStrength />} />
            <Route path="weakness" element={<MeviewWeakness/>} />
          </Route>
          <Route path="meview/projects" element={<MeviewProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
