import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import TestCode from "./pages/TestCode";
import TestCode2 from "./pages/TestCode2";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="testcode" element={<TestCode />} />
          <Route path="testcode2" element={<TestCode2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
