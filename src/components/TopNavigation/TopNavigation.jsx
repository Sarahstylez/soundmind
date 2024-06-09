import "./TopNavigation.scss";
import { Link } from "react-router-dom";
import ProfileImageSmall from "../../assets/images/profile-pic-small.svg";
import { BackArrow } from "../../components/CTAs/CTAs";

function TopNavigation() {
  return (
    <>
      <section className="top-nav">
        <div>
          <div className="top-nav__CTA">
            <BackArrow />
          </div>
          <div className="top-nav__container">
            <h1>welcome back</h1>
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
