import DashboardLayout from "../layout/DashboardLayout";
import SecMoneyCalculator from "../components/section/SecMoneyCalculator";

export default function MoneyCalculator() {
  const dataBreadCrumbs = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Money Calculator", link: "/money-calculator" },
  ];
  return (
    <>
      <DashboardLayout data={dataBreadCrumbs}>
        <SecMoneyCalculator />
      </DashboardLayout>
    </>
  );
}
