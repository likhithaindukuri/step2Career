import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import Tools from "./pages/Tools";
import ATSMatcher from "./pages/tools/ATSMatcher";
import ATSResult from "./pages/tools/ATSResult";
import CareerMatrix from "./pages/tools/CareerMatrix";
import InterviewQuestions from "./pages/tools/InterviewQuestions";
import ResumeBullets from "./pages/tools/ResumeBullets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/tools" element={<Tools />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/tools/ats" element={<ATSMatcher />} />
            <Route path="/tools/ats/result" element={<ATSResult />} />
            <Route path="/tools/resume-bullets" element={<ResumeBullets />} />
            <Route path="/tools/interview-questions" element={<InterviewQuestions />} />
            <Route path="/tools/career-matrix" element={<CareerMatrix />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
