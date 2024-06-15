import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Alarm from "./pages/Alarm";
import Calendar from "./pages/Calendar";
import MoneyCalculator from "./pages/MoneyCalculator";
import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/money-calculator" element={<MoneyCalculator />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}
