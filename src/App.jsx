import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Alarm from "./layout/Alarm";
import MoneyCalculator from "./layout/MoneyCalculator";
import Notes from "./layout/Notes";
import Reminders from "./layout/Reminders";
import Tasks from "./layout/Tasks";
import Profile from "./layout/Profile";

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
        <Route path="/notes" element={<Notes />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
