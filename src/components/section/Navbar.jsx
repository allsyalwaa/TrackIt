import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="shadow">
      <div className="container">
        <div className=" flex h-16 items-center justify-between ">
          <img className="h-10" src={Logo} alt="TrackIt" />

          <ul className="flex items-center gap-6 text-secondary">
            <li className="text-sm font-medium">
              <NavLink to="/">About Us</NavLink>
            </li>

            <li className="flex gap-4">
              <NavLink to="/">
                <Button variant="white">Log In</Button>
              </NavLink>

              <NavLink to="/">
                <Button variant="secondary">Sign Up</Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
