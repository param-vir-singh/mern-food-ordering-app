import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
