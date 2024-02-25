import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./layout/App";
import Question from "./pages/question/Question";
import Mainpage from "./pages/main/Mainpage";
import Homepage from "./pages/home/Homepage";
import Answer from "./pages/answer/Answer";
import MeviewPage from "./pages/meview/MeviewPage";
import MeviewProject from "./pages/meview/MeviewProject";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Mainpage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="testcode" element={<Question />} />
          <Route path="answer" element={<Answer />} />
          <Route path="meview/capability" element={<Outlet />}>
            <Route path="strength" element={<MeviewPage />} />
            <Route path="weakness" element={<MeviewPage />} />
          </Route>
          <Route path="meview/projects" element={<MeviewProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
