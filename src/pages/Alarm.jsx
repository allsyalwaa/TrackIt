import DashboardLayout from "../layout/DashboardLayout";
import SecAlarm from "../components/section/SecAlarm";

export default function Alarm() {
  const dataBreadCrumbs = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Alarm", link: "/alarm" },
  ];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecAlarm />
      </DashboardLayout>
    </>
  );
}
