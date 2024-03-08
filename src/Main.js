import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./layout/App";
import Question from "./pages/question/Question";
import Mainpage from "./pages/main/Mainpage";
import Homepage from "./pages/home/Homepage";
import Answer from "./pages/answer/Answer";
import MeviewPage from "./pages/meview/MeviewPage";
import MeviewProject from "./pages/meview/MeviewProject";
import MeviewChipReview from "./pages/meview/MeviewChipReview";
import MeviewProjectReview from "./pages/meview/MeviewProjectReview";
import MeviewNicknameReview from "./pages/meview/MeviewNicknameReview";
import Mypage from "pages/home/Mypage";
import RedirectionKakao from "components/main/RedirectionKakao";
import RedirectionGoogle from "components/main/RedirectionGoogle";
import ProtectedRoute from "layout/ProtectedRoute";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Mainpage />} />
          <Route path="auth/kakao_login" element={<RedirectionKakao />} />
          <Route path="auth/google_login" element={<RedirectionGoogle />} />
          <Route path="answer" element={<Answer />} />
          {/* 유저전용 */}
          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<Homepage />} />
            <Route path="mypage" element={<Mypage />} />
            <Route path="question" element={<Question />} />
            <Route path="meview" element={<MeviewPage />} />
            <Route path="meview/chipreview" element={<MeviewChipReview />} />
            <Route path="meview/projects" element={<MeviewProject />} />
            <Route
              path="meview/projectreview"
              element={<MeviewProjectReview />}
            />
            <Route
              path="meview/nicknamereview"
              element={<MeviewNicknameReview />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
