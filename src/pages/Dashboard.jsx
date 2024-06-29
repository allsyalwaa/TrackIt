import DashboardLayout from "../layout/DashboardLayout";
import SecDashboard from "../components/section/SecDashboard";

export default function Dashboard() {
  const dataBreadCrumbs = [{ name: "Dashboard", link: "/dashboard" }];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecDashboard />
      </DashboardLayout>
    </>
  );
}
