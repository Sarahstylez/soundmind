import "./HomePage.scss";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

function HomePage() {
  return (
    <div>
      <TopNavigation />
      <h1>Home Page</h1>
      {/* Add your home page content here */}
      <BottomNavigation />
    </div>
  );
}

export default HomePage;
