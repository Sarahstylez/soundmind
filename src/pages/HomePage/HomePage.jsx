import { Link } from "react-router-dom";
import { NextArrow } from "../../components/CTAs/CTAs";
import { useEffect } from "react";
import "./HomePage.scss";
import BarChart from "../../components/BarChart/BarChart";

function HomePage() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12

  return (
    <>
      <section className="home">
        <section className="home-insights"></section>
        <section className="home-daily-log">
          <div className="home-daily-log__title">
            <h3>Daily Log</h3>
            <Link to={`/dailylog/${currentMonth}`}>
              <NextArrow />
            </Link>
          </div>
        </section>
        <section className="home-overview">
          <div className="home-overview__title">
            <h3>Overview</h3>
            <Link to={`/overview/${currentMonth}`}>
              <NextArrow />
            </Link>
          </div>
          <div className="home-overview__chart">
            <BarChart />
          </div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
