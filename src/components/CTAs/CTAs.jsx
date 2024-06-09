import "./CTAs.scss";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import BackArrowIcon from "../../assets/icons/arrow-left.svg";
import ExportIconInactive from "../../assets/icons/export-inactive.svg";
import ExportIconActive from "../../assets/icons/export-active.svg";
import DailyLogIconInactive from "../../assets/icons/daily-log-inactive.svg";
import DailyLogIconActive from "../../assets/icons/daily-log-active.svg";
import OverviewIconInactive from "../../assets/icons/overview-inactive.svg";
import OverviewIconActive from "../../assets/icons/overview-active.svg";
import NextArrowIcon from "../../assets/icons/arrow-right.svg";
import SmallArrowIcon from "../../assets/icons/arrow-form.svg";

/* -------------------------------------------------------------------------- */
/*                                   Buttons                                  */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                             Top Navigation CTAs                            */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                           Bottom Navigation CTAs                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Export Button                               */
/* -------------------------------------------------------------------------- */

const ExportButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    exportToPDF();
  };

  const exportToPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10);
        pdf.save("download.pdf");
      })
      .catch((error) => {
        console.error("Error exporting to PDF", error);
      });
  };

  return (
    <>
      <div id="pdf-content">{/* content to be exported goes here */}</div>
      <button className="button__export" onClick={handleClick}>
        <img
          src={isClicked ? ExportIconActive : ExportIconInactive}
          alt={isClicked ? "export icon active" : "export icon inactive"}
        />
      </button>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Daily Log Button                              */
/* -------------------------------------------------------------------------- */

function DailyLogButton() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname === `/dailylog/${id}`) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [location.pathname, id]);

  const handleClick = () => {
    navigate(`/dailylog/${id}`);
  };

  return (
    <button className="button__daily-log" onClick={handleClick}>
      <img
        src={isClicked ? DailyLogIconActive : DailyLogIconInactive}
        alt={isClicked ? "daily log icon active" : "daily log icon inactive"}
      />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Overview Button                              */
/* -------------------------------------------------------------------------- */

function OverviewButton() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/overview`) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [location.pathname]);

  const handleClick = () => {
    navigate(`/overview`);
  };

  return (
    <button className="button__overview" onClick={handleClick}>
      <img
        src={isClicked ? OverviewIconActive : OverviewIconInactive}
        alt={isClicked ? "overview icon active" : "overview icon inactive"}
      />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Next Arrow Button                             */
/* -------------------------------------------------------------------------- */

function NextArrow() {
  const { id } = useParams();
  const location = useLocation();

  return (
    <button className="button__next-arrow">
      {location.pathname !== "/overview" && <h4>{id}</h4>}
      <img src={NextArrowIcon} alt="next arrow icon" />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Select Month Button                             */
/* -------------------------------------------------------------------------- */

function SelectMonthButton({ month }) {
  return (
    <button className="button-small button__select-month">
      <h3>{month}</h3>
      <img src={SmallArrowIcon} alt="small next arrow icon" />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Export List                                */
/* -------------------------------------------------------------------------- */

export {
  PrimaryButton,
  SecondaryButton,
  SignUpButton,
  BackArrow,
  ExportButton,
  DailyLogButton,
  OverviewButton,
  NextArrow,
  SelectMonthButton,
};
