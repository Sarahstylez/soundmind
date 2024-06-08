import "./CTAs.scss";

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

export { PrimaryButton, SecondaryButton, SignUpButton };
