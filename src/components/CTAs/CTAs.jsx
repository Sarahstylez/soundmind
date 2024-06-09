import "./CTAs.scss";
import { useLocation, useNavigate } from "react-router-dom";
import BackArrowIcon from "../../assets/icons/arrow-left.svg";

function PrimaryButton({ label, onClick }) {
  return (
    <>
      <button className="button button__primary" onClick={onClick}>
        <h3>{label}</h3>
      </button>
    </>
  );
}

function SecondaryButton({ label, onClick }) {
  return (
    <>
      <button className="button button__secondary" onClick={onClick}>
        <h3>{label}</h3>
      </button>
    </>
  );
}

function SignUpButton({ label, onClick }) {
  return (
    <>
      <button className="clear-button button__signup" onClick={onClick}>
        <h3>{label}</h3>
      </button>
    </>
  );
}

function BackArrow() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === "/home") {
      navigate("/login");
    } else {
      navigate(-1);
    }
  };

  return (
    <button onClick={handleBackClick} className="button__back-arrow">
      <img src={BackArrowIcon} alt="back arrow icon" />
    </button>
  );
}

export { PrimaryButton, SecondaryButton, SignUpButton, BackArrow };
