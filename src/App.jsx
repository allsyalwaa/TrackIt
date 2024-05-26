import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Alarm from "./layout/Alarm";
import MoneyCalculator from "./layout/MoneyCalculator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/money-calculator" element={<MoneyCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}
