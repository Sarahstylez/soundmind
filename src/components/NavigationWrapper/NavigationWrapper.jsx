import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./NavigationWrapper.scss";

const NavigationWrapper = ({ children }) => {
  const location = useLocation();
  const pathnamesToShowNavigation = [
    "/home",
    "/settings",
    "/dailylog/",
    "/overview/",
    "/overview",
  ];

  const showNavigation = pathnamesToShowNavigation.some(
    (path) =>
      location.pathname.startsWith(path) ||
      new RegExp(`^${path}[1-31]*$`).test(location.pathname)
  );

  return (
    <div>
      {showNavigation && <Navigation />}
      {children}
    </div>
  );
};

export default NavigationWrapper;
