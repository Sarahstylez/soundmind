import { DailyLogForm } from "../Forms/Forms";
import { useEffect } from "react";
import "./DailyLog.scss";

function DailyLog() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="daily-log__container">
      <section className="daily-log">
        <DailyLogForm />
      </section>
    </div>
  );
}

export default DailyLog;
