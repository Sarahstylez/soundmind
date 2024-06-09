import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const NavigationWrapper = ({ children }) => {
  const location = useLocation();
  const showNavigation = [
    "/home",
    "/settings",
    "/dailylog/:id",
    "/overview",
    "/overview/:id",
  ].some((path) => location.pathname.startsWith(path));

  return (
    <div>
      {showNavigation && <Navigation />}
      {children}
    </div>
  );
};

export default NavigationWrapper;
