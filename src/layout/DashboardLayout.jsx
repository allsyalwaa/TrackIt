import Sidebar from "../components/section/Sidebar";
import BreadCrumbs from "../components/ui/BreadCrumbs";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex h-dvh ">
        <Sidebar />
        <main className="container mx-auto flex w-full flex-col p-8 ">
          <BreadCrumbs />
          {children}
        </main>
      </div>
    </>
  );
}
