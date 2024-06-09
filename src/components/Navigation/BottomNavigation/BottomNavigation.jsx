import "./BottomNavigation.scss";
import { ExportButton, DailyLogButton, OverviewButton } from "../../CTAs/CTAs";

function BottomNavigation() {
  return (
    <>
      <section className="bottom-nav">
        <div className="bottom-nav__container">
          <ExportButton />
          <DailyLogButton />
          <OverviewButton />
        </div>
      </section>
    </>
  );
}

export default BottomNavigation;
