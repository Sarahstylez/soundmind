import "./TopNavigation.scss";
import { Link } from "react-router-dom";

function TopNavigation() {
  return (
    <>
      <section className="top-nav">
        <div>
          <h1>welcome back</h1>
          <Link to="/settings">
            <img alt="user profile pic and link to settings" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default TopNavigation;
