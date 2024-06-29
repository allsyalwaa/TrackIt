import DashboardLayout from "../layout/DashboardLayout";
import SecNotes from "../components/section/SecNotes";

export default function Notes() {
  const dataBreadCrumbs = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Notes", link: "/notes" },
  ];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecNotes />
      </DashboardLayout>
    </>
  );
}
