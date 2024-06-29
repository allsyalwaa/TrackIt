import DashboardLayout from "../layout/DashboardLayout";
import SecReminders from "../components/section/SecReminders";

export default function Reminders() {
  const dataBreadCrumbs = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Reminders", link: "/reminders" },
  ];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecReminders />
      </DashboardLayout>
    </>
  );
}
