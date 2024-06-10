import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { NextArrow } from "./components/CTAs/CTAs";

const MainApp = () => {
  const location = useLocation();
  const isDailyLogRoute = location.pathname.startsWith("/dailylog/");
  const isOverviewMonthRoute = location.pathname.startsWith("/overview/");

  return (
    <div
      className={`App ${isDailyLogRoute ? "daily-log-height" : ""} ${
        isOverviewMonthRoute ? "overview-month-height" : ""
      }`}
    >
      <NavigationWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/soundmind" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/dailylog/:id"
            element={<DailyLog />}
            component={NextArrow}
          />
          <Route path="/overview" element={<Overview />} />
          <Route
            path="/overview/:id"
            element={<OverviewMonth />}
            component={NextArrow}
          />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </NavigationWrapper>
      <Overlay />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <MainApp />
    </HashRouter>
  );
}

export default App;
