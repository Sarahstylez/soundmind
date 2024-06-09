import "./BottomNavigation.scss";
import { ExportButton, DailyLogButton } from "../CTAs/CTAs";

function BottomNavigation() {
  return (
    <>
      <section className="bottom-nav">
        <ExportButton />
        <DailyLogButton />
      </section>
    </>
  );
}

export default BottomNavigation;
