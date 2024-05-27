import Navbar from "../components/section/Navbar";
import Footer from "../components/section/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
