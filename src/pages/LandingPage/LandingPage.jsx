import "./LandingPage.scss";
import { PrimaryButton, SecondaryButton } from "../../components/CTAs/CTAs";
import Logo from "../../assets/logos/logo-large.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="landing">
      <div className="logo__text">
        <section className="landing__container">
          <img src={Logo} alt="large soundmind logo" />
          <div className="landing__slogan">
            <h2>cultivating calm,</h2>
            <h2>inspiring clarity.</h2>
          </div>
        </section>
        <section className="landing__CTAs">
          <Link to="/login">
            <PrimaryButton label="Log in" />
          </Link>
          <Link to="/signup">
            <SecondaryButton label="Sign up" />
          </Link>
        </section>
      </div>
    </section>
  );
}

export default LandingPage;
