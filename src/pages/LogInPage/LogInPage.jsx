import "./LogInPage.scss";
import Logo from "../../assets/logos/logo-small.svg";
import ProfileImage from "../../assets/images/profile-pic-large.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LogInForm } from "../../components/Forms/Forms";
import { PrimaryButton, SignUpButton } from "../../components/CTAs/CTAs";

function LogInPage() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="login">
        <div className="title">
          <img src={Logo} alt="small soundmind logo" />
          <div className="title__text">
            <h2>learn about yourself,</h2>
            <h2>and adhd.</h2>
          </div>
        </div>
        <img
          src={ProfileImage}
          alt="Alex Sharp's profile pic"
          className="profile-image"
        />
        <LogInForm />

        <section className="login__CTAs">
          <Link to="/welcome">
            <PrimaryButton label="Log in" />
          </Link>
          <Link to="/signup">
            <SignUpButton label="Not registered? Sign up here" />
          </Link>
        </section>
      </section>
    </>
  );
}

export default LogInPage;
