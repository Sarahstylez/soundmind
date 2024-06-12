import "./OverviewMonth.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PrimaryButton, SecondaryButton, EventsButton } from "../CTAs/CTAs";
import BarChart from "../BarChart/BarChart";

function OverviewMonth() {
  const { id: month_id } = useParams(); // Extract month_id from URL parameters
  const [logs, setLogs] = useState([]);
  const [symptomCategories, setSymptomCategories] = useState([]);
  const [experienceCategories, setExperienceCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    // Fetch data from the logs.json file
    fetch("/logs.json")
      .then((response) => response.json())
      .then((data) => {
        const allLogs = data.reduce((acc, user) => {
          user.months.forEach((month) => {
            if (month.month_id === month_id) {
              month.logs.forEach((log) => acc.push(log));
            }
          });
          return acc;
        }, []);
        setLogs(allLogs);
      });

    // Fetch category names from symptoms.json
    fetch("/symptoms.json")
      .then((response) => response.json())
      .then((data) => {
        setSymptomCategories(Object.keys(data.symptomCategories));
        setExperienceCategories(Object.keys(data.experienceCategories));
      });

    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, [month_id]);

  useEffect(() => {
    const countCategories = (logs) => {
      const counts = {};
      logs.forEach((log) => {
        Object.keys(log.symptomChecklist).forEach((category) => {
          if (!counts[category]) {
            counts[category] = 0;
          }
          counts[category] += log.symptomChecklist[category].length;
        });
        Object.keys(log.experienceChecklist).forEach((category) => {
          if (!counts[category]) {
            counts[category] = 0;
          }
          counts[category] += 1;
        });
      });
      return counts;
    };
    setCategoryCounts(countCategories(logs));
  }, [logs]);

  return (
    <section className="overview-month">
      {symptomCategories.map((category, index) => (
        <div key={index}>
          <div className="overview-month__title">
            <h3>{category}</h3>
          </div>
          <div className="overview-month__chart">
            <BarChart
              category={category}
              monthlyData={{ [month_id]: categoryCounts[category] || 0 }}
            />
          </div>
        </div>
      ))}
      {experienceCategories.map((category, index) => (
        <div key={index}>
          <div className="overview-month__title">
            <h3>{category}</h3>
          </div>
          <div className="overview-month__chart">
            <BarChart
              category={category}
              monthlyData={{ [month_id]: categoryCounts[category] || 0 }}
            />
          </div>
        </div>
      ))}
      <div className="overview-month__title">
        <h3>Events</h3>
      </div>
      <EventsButton />
      <section className="overview-month__CTAs">
        <PrimaryButton label="Export as PDF" />
        <Link to="/overview">
          <SecondaryButton label="Overview" />
        </Link>
      </section>
    </section>
  );
}

export default OverviewMonth;
