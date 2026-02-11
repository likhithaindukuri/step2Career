import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import ATSMatcher from "./pages/tools/ATSMatcher";
import ATSResult from "./pages/tools/ATSResult";
import CareerMatrix from "./pages/tools/CareerMatrix";
import InterviewQuestions from "./pages/tools/InterviewQuestions";
import ResumeBullets from "./pages/tools/ResumeBullets";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/ats" element={<ATSMatcher />} />
          <Route path="/tools/ats/result" element={<ATSResult />} />
          <Route path="/tools/resume-bullets" element={<ResumeBullets />} />
          <Route
            path="/tools/interview-questions"
            element={<InterviewQuestions />}
          />
          <Route path="/tools/career-matrix" element={<CareerMatrix />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
