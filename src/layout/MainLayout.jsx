import Navbar from "../components/section/Navbar";
import Logo from "../assets/illustration-logo.svg";
import Image1 from "../assets/illustration-task.svg";
import Image2 from "../assets/illustration-dashboard.svg";
import Footer from "../components/section/Footer";
import { NavLink } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
