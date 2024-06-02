import Sidebar from "../components/section/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex h-screen ">
        <Sidebar />
        <main className="container mx-auto flex w-full flex-col overflow-y-auto p-8 ">
          {children}
        </main>
      </div>
    </>
  );
}
