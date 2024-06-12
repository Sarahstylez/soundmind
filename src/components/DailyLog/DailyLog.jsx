import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DailyLogForm } from "../Forms/Forms";
import "./DailyLog.scss";

function DailyLog() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Get today's date
    const today = new Date();
    const day = today.getDate();

    // If the id doesn't match today's date, redirect to the correct route
    if (parseInt(id) !== day) {
      navigate(`/dailylog/${day}`, { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className="daily-log__container">
      <section className="daily-log">
        <DailyLogForm id={id} />
      </section>
    </div>
  );
}

export default DailyLog;
