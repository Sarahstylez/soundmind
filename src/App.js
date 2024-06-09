import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Overlay from "./components/iOS/iOS";
import LandingPage from "./pages/LandingPage/LandingPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Settings from "./components/Settings/Settings";
import DailyLog from "./components/DailyLog/DailyLog";
import Overview from "./components/Overview/Overview";
import OverviewMonth from "./components/OverviewMonth/OverviewMonth";
import NavigationWrapper from "./components/NavigationWrapper/NavigationWrapper";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavigationWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/soundmind" element={<LandingPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dailylog/:id" element={<DailyLog />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/overview/:id" element={<OverviewMonth />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </NavigationWrapper>
      </HashRouter>
      <Overlay /> {/* Add the overlay component here */}
    </div>
  );
}

export default App;
