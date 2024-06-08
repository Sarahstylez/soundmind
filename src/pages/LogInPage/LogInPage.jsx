import "./LogInPage.scss";
import Logo from "../../assets/logos/logo-small.svg";
import ProfileImage from "../../assets/images/profile-pic-large.svg";

function LogInPage() {
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
          alt="Alex Sharp's profile image"
          className="profile-image"
        />
      </section>
    </>
  );
}

export default LogInPage;
