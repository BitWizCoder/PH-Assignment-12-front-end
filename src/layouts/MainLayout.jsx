import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const st = {
  marginTop: "130px",
};
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={st}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
