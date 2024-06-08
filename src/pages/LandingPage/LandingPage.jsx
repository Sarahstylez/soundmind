import "./LandingPage.scss";
import { PrimaryButton, SecondaryButton } from "../../components/CTAs/CTAs";
import Logo from "../../assets/logos/logo-large.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="landing">
      <div className="logo__text">
        <section className="landing__container">
          <img src={Logo} alt="large soundmind logo" />
          <div className="landing__slogan">
            <h2>cultivating calm,</h2>
            <h2>inspiring clarity.</h2>
          </div>
        </section>
        <section className="landing__CTAs">
          <PrimaryButton label="Log in" onClick={handleLoginClick} />
          <SecondaryButton label="Sign up" onClick={handleSignupClick} />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
