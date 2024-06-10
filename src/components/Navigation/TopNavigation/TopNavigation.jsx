import "./TopNavigation.scss";
import { Link, useLocation } from "react-router-dom";
import ProfileImageSmall from "../../../assets/images/profile-pic-small.svg";
import { BackArrow } from "../../../components/CTAs/CTAs";

function TopNavigation() {
  const location = useLocation();

  const monthToNameMap = {
    1: "january",
    2: "february",
    3: "march",
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    10: "october",
    11: "november",
    12: "december",
  };

  const getTitle = () => {
    const path = location.pathname;
    if (path === "/home") return "welcome back";
    if (path === "/settings") return "settings";
    if (path.startsWith("/dailylog/")) return "daily log";
    if (path === "/overview") return "overview";
    if (path.startsWith("/overview/")) {
      const id = path.split("/")[2];
      const month = parseInt(id, 10);
      return monthToNameMap[month] || "";
    }
    return "";
  };

  return (
    <>
      <section className="top-nav">
        <div>
          <div className="top-nav__CTA">
            <BackArrow />
          </div>
          <div className="top-nav__container">
            <h1 className="top-nav__title">{getTitle()}</h1>
            <Link to="/settings">
              <img
                src={ProfileImageSmall}
                alt="user profile pic and link to settings"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopNavigation;
