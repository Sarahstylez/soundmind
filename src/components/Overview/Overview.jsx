import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Overview.scss";
import { SelectMonthButton } from "../CTAs/CTAs";

function Overview() {
  const [logsData, setLogsData] = useState(null);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const monthToNameMap = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    fetch("/logs.json")
      .then((response) => response.json())
      .then((data) => setLogsData(data[0]))
      .catch((error) => console.error("Error fetching logs data:", error));
  }, []);

  const handleMonthClick = (monthId) => {
    navigate(`/overview/${monthId}`);
  };

  if (!logsData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="overview">
      <div className="overview__title">
        <h3>{currentYear}</h3>
      </div>
      <section className="overview__CTAs">
        {logsData.months
          .sort((a, b) => b.month_id - a.month_id) // Sort in reverse order
          .map(({ month_id }) => (
            <SelectMonthButton
              key={month_id}
              month={monthToNameMap[month_id]}
              onClick={() => handleMonthClick(month_id)}
            />
          ))}
      </section>
    </section>
  );
}

export default Overview;