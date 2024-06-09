import "./WelcomePage.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Link to="/home">
        <section className="welcome">
          <div className="welcome__container">
            <h1 className="welcome__message">welcome back</h1>
          </div>
        </section>
      </Link>
    </>
  );
}

export default WelcomePage;
