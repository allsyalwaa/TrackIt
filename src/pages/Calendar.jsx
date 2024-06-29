import DashboardLayout from "../layout/DashboardLayout";
import SecCalendar from "../components/section/SecCalendar";

export default function Calendar() {
  const dataBreadCrumbs = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Calendar", link: "/calendar" },
  ];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecCalendar />
      </DashboardLayout>
    </>
  );
}
