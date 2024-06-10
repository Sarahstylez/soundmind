import "./OverviewMonth.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PrimaryButton,
  SecondaryButton,
  ExperienceButton,
  EventsButton,
} from "../CTAs/CTAs";
import BarChart from "../BarChart/BarChart";

function OverviewMonth() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="overview-month">
        <div className="overview-month__title">
          <h3>Attention and Focus</h3>
        </div>
        <div className="overview-month__chart">
          <BarChart />
        </div>
        <div className="overview-month__title">
          <h3>Hyperactivity and Impulsivity</h3>
        </div>
        <div className="overview-month__chart">
          <BarChart />
        </div>
        <div className="overview-month__title">
          <h3>Emotional Regulation</h3>
        </div>
        <div className="overview-month__chart">
          <BarChart />
        </div>
        <div className="overview-month__title">
          <h3>Daily Functioning</h3>
        </div>
        <div className="overview-month__chart">
          <BarChart />
        </div>
        <div className="overview-month__title">
          <h3>Sleep and Physicality</h3>
        </div>
        <div className="overview-month__chart">
          <BarChart />
        </div>
        <div className="overview-month__title">
          <h3>Overall Mood</h3>
        </div>
        <ExperienceButton />
        <div className="overview-month__title">
          <h3>Energy Levels</h3>
        </div>
        <ExperienceButton />
        <div className="overview-month__title">
          <h3>Stress Levels</h3>
        </div>
        <ExperienceButton />
        <div className="overview-month__title">
          <h3>Sleep Quality</h3>
        </div>
        <ExperienceButton />
        <div className="overview-month__title">
          <h3>Medication Taken</h3>
        </div>
        <ExperienceButton />
        <div className="overview-month__title">
          <h3>Events</h3>
        </div>
        <EventsButton />
      </section>
      <section className="overview-month__CTAs">
        <PrimaryButton label="Export as PDF" />
        <Link to="/overview">
          <SecondaryButton label="Overview" />
        </Link>
      </section>
    </>
  );
}

export default OverviewMonth;
