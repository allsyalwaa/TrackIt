import SecTasks from "../components/section/SecTasks";
import DashboardLayout from "../layout/DashboardLayout";

export default function Tasks() {
  const dataBreadCrumbs = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Tasks", link: "/tasks" },
  ];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecTasks />
      </DashboardLayout>
    </>
  );
}
