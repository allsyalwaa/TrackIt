import Sidebar from "../components/section/Sidebar";
import BreadCrumbs from "../components/ui/BreadCrumbs";
import { useEffect } from "react";
import { useUserContext } from "../utils/UserContext";

export default function DashboardLayout({ children, data }) {
  const { setUser } = useUserContext();
  const BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetch(BASE_URL + `/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser({
            email: data.email,
            username: data.username,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      setUser({
        email: "syalwa@gmail.com",
        username: "syalwa",
      });
    }
  }, [BASE_URL, setUser]);
  return (
    <>
      <div className="flex min-h-dvh ">
        <Sidebar />
        <main className="container mx-auto flex w-full flex-col p-8 ">
          <BreadCrumbs data={data} />
          {children}
        </main>
      </div>
    </>
  );
}
