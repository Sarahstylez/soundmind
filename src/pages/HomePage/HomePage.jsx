import { Link, useParams } from "react-router-dom";
import { NextArrow } from "../../components/CTAs/CTAs";
import "./HomePage.scss";

function HomePage() {
  const { id } = useParams();
  return (
    <>
      <section className="home">
        <section className="home-insights"></section>
        <section className="home-daily-log">
          <div className="home-daily-log__title">
            <h3>Daily Log</h3>
            <Link to={`/dailylog/${id}`}>
              <NextArrow />
            </Link>
          </div>
        </section>
        <section className="home-overview">
          <div className="home-overview__title">
            <h3>Overview</h3>
            <Link to={`/overview/${id}`}>
              <NextArrow />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
