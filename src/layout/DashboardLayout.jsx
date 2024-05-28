import Sidebar from "../components/section/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex h-screen ">
        <Sidebar />
        <div className="container mx-auto flex w-full flex-col p-8">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
