import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./NavigationWrapper.scss";

const NavigationWrapper = ({ children }) => {
  const location = useLocation();
  const showNavigation = [
    "/home",
    "/settings",
    "/dailylog/:id",
    "/dailylog/undefined",
    "/overview",
    "/overview/:id",
    "/overview/undefined",
  ].some((path) => location.pathname.startsWith(path));

  return (
    <div>
      {showNavigation && <Navigation />}
      {children}
    </div>
  );
};

export default NavigationWrapper;
